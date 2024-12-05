<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use App\Models\User;
use Stripe\Stripe;

class PaymentController extends Controller
{
    public function index()
    {
        $data = Payment::get();
        return view('pages.payment.index',compact('data'));
    }

    public function update(Request $request)
    {
        $reqData = $request->all();
        $id = $reqData['id'];

        $data = Payment::find($id);
        $data->status = $reqData['status'];
        $data->save();

        return redirect()->route('payment')->with('success', 'Payment Updated successfully.');
    }

    public function show($id)
    {
        $data = Payment::with('profile','subscription')->find($id);
        return view('pages.offcanvas.payment-show',compact('data'));
    }

    public function refund_transaction($id)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $payment = Payment::find($id);

        $transaction_id = $payment->transaction_id;
        $paymentIntent = \Stripe\PaymentIntent::retrieve($transaction_id);

        if($paymentIntent->status === 'succeeded')
        {
            try {
                $refund = \Stripe\Refund::create([
                    'payment_intent' => $transaction_id,
                    'amount' => $paymentIntent->amount, // Amount to refund in the smallest currency unit (e.g., cents for USD)
                    'reason' => 'requested_by_customer', // Reason for the refund
                ]);
        
                if ($refund->status === 'succeeded') {

                    $payment->status = 'Refunded';
                    $payment->save();

                    return redirect()->route('payment')->with('success', 'Payment Refunded successfully.');
                } else {
                    // return response()->json([
                    //     'error' => 'Failed to refund payment.',
                    //     'refund_status' => $refund->status,
                    // ], 500);
                    return redirect()->route('payment')->with('success', 'Failed to refund payment');
                }
            } catch (\Stripe\Exception\CardException $e) {
                // return response()->json([
                //     'error' => $e->getError()->message,
                // ], 400);
                return redirect()->route('payment')->with('error', $e->getError()->message);
            } catch (\Stripe\Exception\InvalidRequestException $e) {
                // return response()->json([
                //     'error' => $e->getMessage(),
                // ], 400);
                return redirect()->route('payment')->with('error', $e->getError()->message);
            } catch (\Exception $e) {
                // return response()->json([
                //     'error' => $e->getMessage(),
                // ], 500);
                return redirect()->route('payment')->with('error', $e->getMessage());
            }
        } 
        else {
            // return response()->json([
            //     'error' => 'Cannot refund payment. The payment is not in the "succeeded" state.',
            // ], 400);

            return redirect()->route('payment')->with('error', 'Cannot refund payment. The payment is not in the "succeeded" state.');
        }
    }
}
