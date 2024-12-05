<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscription;
use App\Models\SubscriptionProfileDetail;
use App\Models\Payment;
use App\Models\PaymentDetail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Mockery\Expectation;
use Stripe\Stripe;
use Stripe\Charge;

use function PHPUnit\Framework\isEmpty;

class PaymentController extends Controller
{
    public function store_subscription_detail($id,$payment_id)
    {
        // $reqData = $request->all();
        $user = auth()->user();

        $find_subscription = Subscription::find($id);
        $get_months = $find_subscription->months;

        $current_date = today();
        $expiry_date = today()->addMonths($get_months);

        $payment_find = Payment::find($payment_id);

        $record = SubscriptionProfileDetail::where('payment_id',$id)->first();

        if($payment_find->status == 'Succeeded')
        {
            if(!$record)
            {
                $check = SubscriptionProfileDetail::where('profile_id',$payment_find->profile_id)->where('subscription_id',$payment->subscription_id)->where('status','active')->first();
                if(!$check)
                {
                    $store = new SubscriptionProfileDetail();
                    $store->profile_id = $payment_find->profile_id;
                    $store->payment_id = $id;
                    $store->subscription_id = $payment_find->subscription_id;
                    $store->strt_date = $current_date;
                    $store->end_date =  $expiry_date;
                    $store->renewal_date =  $expiry_date;
                    $store->auto_renewal =  '0';
                    $store->status =  'active';
                    $store->save();
                }
                else
                {
                    // return redirect()->route('payment')->with('error','You Already Have These Subscription');
                    return response()->json(['Message' => 'You Already Have These Subscription'], 200);
                }
            }
            return response()->json(['Message' => 'Subscription Details Stored'], 200);
        }
        else
        {
            return response()->json(['Message' => 'Subscription Details Not Stored'], 200);
        }
        // exit;
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/subscription/check",
 *     tags={"Subscription"},
 *     summary="Check Subscription",
 *     description="Check For SUbscription",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="application/json",
 *             @OA\Schema(
 *                 required={"subscription_id"},
 *                 @OA\Property(
 *                     property="subscription_id",
 *                     type="integer"
 *                 ),
 * 
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Procced With Payment "
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Bad request",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Internal server error",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *  security={{"bearerAuth":{}}}
 * )
 *      
 */
    public function check_subscription(Request $request)
    {
        $reqData = $request->all();
        $user = auth()->user();
        $subId = $reqData['subscription_id'];

        $subscription = SubscriptionProfileDetail::where('profile_id',$user->id)->where('subscription_id',$subId)->where('status','active')->first();
        // return response()->json($subscription);
        // exit;

        if($subscription)
        {
            return response()->json(['message'=>'You Already Have This Subscription','code'=>"400"],200);
        }
        else
        {
            return response()->json(['message'=>'Processed With Payment','code'=>"200"],200);
        }
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/payment/store",
 *     tags={"Payment"},
 *     summary="Process payment",
 *     description="Process payment using credit card details",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="application/json",
 *             @OA\Schema(
 *                 required={"card_holder_name","card_number","expiry_date","cvv","amount","subscription_id"},
 *                 @OA\Property(
 *                     property="card_holder_name",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                     property="card_number",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                     property="expiry_date",
 *                     type="string",
 *                     pattern="^\d{2}/\d{2}$"
 *                 ),
 *                 @OA\Property(
 *                     property="cvv",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                     property="amount",
 *                     type="number"
 *                 ),
 *                 @OA\Property(
 *                     property="subscription_id",
 *                     type="integer"
 *                 ),
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Payment successful"
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Bad request",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Internal server error",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *  security={{"bearerAuth":{}}}
 * )
 *      
 */
    public function payment(Request $request)
    {
        $reqData = $request->all();
        $user = auth()->user();

        $validator = Validator::make($reqData, [
            'card_holder_name' => 'required|string',
            'card_number' => 'required|string',
            'expiry_date' => 'required|string|regex:/^\d{2}\/\d{2}$/',
            'cvv' => 'required|string',
            'amount' => 'required|numeric',
            'subscription_id' => 'required|exists:subscriptions,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $card_holder_name = $reqData['card_holder_name'];
        $card_number = $reqData['card_number'];
        $expiry_date = $reqData['expiry_date']; // Format: "MM/YYYY"
        $cvv = $reqData['cvv'];
        $amount = $reqData['amount'];
        $subscription_id = $reqData['subscription_id'];

        list($expiry_month, $expiry_year) = explode('/', $expiry_date);
        $current_month = Carbon::now()->format('m');
        $current_year = Carbon::now()->format('Y');
        $current_year_last_two_digits = substr($current_year, -2);

        if ($expiry_year < $current_year_last_two_digits || ($expiry_year == $current_year_last_two_digits && $expiry_month < $current_month)) {
            return response()->json(['message' => 'Card is expired'], 400);
        }
        $expiry_date_formatted = Carbon::createFromFormat('m/Y', $expiry_date)->startOfMonth();

        DB::beginTransaction();

        try {

           $trans = 1;
            // $client_secret = $paymentIntent->client_secret;
    
            if ($trans = 1) {

                $payment = new Payment();
                $payment->profile_id = $user->id;
                $payment->subscription_id = $subscription_id;
                $payment->payment_date = Carbon::today();
                $payment->amount = $amount;
                $payment->payment_method = "card";
                $payment->transaction_id = null;
                $payment->status =  'pending';
                $payment->save();

                $payment_id = $payment->id;
                $encrypted_card_number = encrypt($card_number);
                $encrypted_cvv = encrypt($cvv);

                $payment_detail = new PaymentDetail();
                $payment_detail->payment_id = $payment_id;
                $payment_detail->profile_id = $user->id;
                $payment_detail->card_holder_name = $card_holder_name;
                $payment_detail->card_number = $encrypted_card_number;
                $payment_detail->expiry_date = $expiry_date_formatted;
                $payment_detail->cvv = $encrypted_cvv;
                $payment_detail->save();
                DB::commit();

                // $this->store_subscription_detail($subscription_id);

                return response()->json(['message' => 'Payment successful'], 200);
            }
            else
            {
                DB::rollback();
                return response()->json(['message' => 'Payment unsuccessful'], 400);
            }
        } 
        catch (\Stripe\Exception\CardException $e) {
            DB::rollBack();
            Log::error('Card error: ' . $e->getMessage());
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\InvalidRequestException $e) {
            DB::rollBack();
            Log::error('Invalid request error: ' . $e->getMessage());
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\AuthenticationException $e) {
            DB::rollBack();
            Log::error('Authentication error: ' . $e->getMessage());
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\ApiConnectionException $e) {
            DB::rollBack();
            Log::error('Stripe API connection error: ' . $e->getMessage());
            return response()->json(['message' => 'An error occurred while communicating with the payment gateway'], 500);
        } catch (\Stripe\Exception\ApiErrorException $e) {
            DB::rollBack();
            Log::error('Stripe API error: ' . $e->getMessage());
            return response()->json(['message' => 'An error occurred while processing the payment'], 500);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Unknown error: ' . $e->getMessage());
            return response()->json(['message' => 'An unexpected error occurred'], 500);
        }
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/payment/intial",
 *     tags={"Payment"},
 *     summary="Process payment",
 *     description="Process payment using credit card details",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="application/json",
 *             @OA\Schema(
 *                 required={"amount","subscription_id"},
 *                 @OA\Property(
 *                     property="amount",
 *                     type="number"
 *                 ),
 *                 @OA\Property(
 *                     property="subscription_id",
 *                     type="integer"
 *                 ),
 * 
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Payment successful"
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Bad request",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Internal server error",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *  security={{"bearerAuth":{}}}
 * )
 *      
 */
    public function IntialPayment(Request $request)
    {
        $reqData = $request->all();
        $user = auth()->user();

        $validator = Validator::make($reqData, [
            'amount' => 'required|numeric',
            'subscription_id' => 'required|exists:subscriptions,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $amount = $reqData['amount'];
        $subscription_id = $reqData['subscription_id'];

        try
        {
            Stripe::setApiKey(env('STRIPE_SECRET'));

            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $amount * 100, 
                'currency' => 'INR',
                'description' => 'Payment for subscription',
                'metadata' => [
                    'user_id' => $user->id,
                    'subscription_id' => $subscription_id
                ]
            ]);

            $client_secret = $paymentIntent->client_secret;
            $paymenIntentId = $paymentIntent->id;
            $paymentIntentRetreive = \Stripe\PaymentIntent::retrieve($paymenIntentId);

            if ($paymentIntentRetreive->status === "succeeded") {
                $payment = new Payment();
                $payment->profile_id = $user->id;
                $payment->subscription_id = $subscription_id;
                $payment->payment_date = Carbon::today();
                $payment->amount = $amount;
                $payment->payment_method = "card";
                $payment->transaction_id = $paymentIntentRetreive->id;
                $payment->status =  'Success';
                $payment->save();
            }
            else if($paymentIntentRetreive->status === "failed")
            {
                $payment = new Payment();
                $payment->profile_id = $user->id;
                $payment->subscription_id = $subscription_id;
                $payment->payment_date = Carbon::today();
                $payment->amount = $amount;
                $payment->payment_method = "card";
                $payment->transaction_id = $paymentIntentRetreive->id;
                $payment->status =  'Failed';
                $payment->save();
            }
            else
            {
                $payment = new Payment();
                $payment->profile_id = $user->id;
                $payment->subscription_id = $subscription_id;
                $payment->payment_date = Carbon::today();
                $payment->amount = $amount;
                $payment->payment_method = "card";
                $payment->transaction_id = $paymentIntentRetreive->id;
                $payment->status =  'Pending';
                $payment->save();
            }
            $this->store_subscription_detail($subscription_id,$payment->id);

            return response()->json(['message' => 'Payment Intialised', 'client_secret' => $client_secret, 'Payment_intent_id'=> $paymenIntentId], 200);
            exit;
        }
        catch (\Stripe\Exception\CardException $e) {
            DB::rollBack();
            Log::error('Card error: ' . $e->getMessage());
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\InvalidRequestException $e) {
            DB::rollBack();
            Log::error('Invalid request error: ' . $e->getMessage());
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\AuthenticationException $e) {
            DB::rollBack();
            Log::error('Authentication error: ' . $e->getMessage());
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\ApiConnectionException $e) {
            DB::rollBack();
            Log::error('Stripe API connection error: ' . $e->getMessage());
            return response()->json(['message' => 'An error occurred while communicating with the payment gateway'], 500);
        } catch (\Stripe\Exception\ApiErrorException $e) {
            DB::rollBack();
            Log::error('Stripe API error: ' . $e->getMessage());
            return response()->json(['message' => 'An error occurred while processing the payment'], 500);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Unknown error: ' . $e->getMessage());
            return response()->json(['message' => 'An unexpected error occurred'], 500);
        }
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/payment/stripe",
 *     tags={"Payment"},
 *     summary="Process payment",
 *     description="Process payment using credit card details",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="application/json",
 *             @OA\Schema(
 *                 required={"tid"},
 *                 @OA\Property(
 *                     property="tid",
 *                     type="string"
 *                 ),
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Payment successful"
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Bad request",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Internal server error",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string")
 *         )
 *     ),
 * )
 *      
 */
public function stripePost(Request $request)
{
    try {
        Stripe::setApiKey(env('STRIPE_SECRET'));
        $reqData = $request->all();
        $paymenIntentId = $reqData['tid'];
        $paymentIntentRetreive = \Stripe\PaymentIntent::retrieve($paymenIntentId);


        return response()->json(['status' => $paymentIntentRetreive->status], 200);
    } catch (\Exception $ex) {
        return response()->json(['error' => $ex->getMessage()], 500);
    }
}
/**
 * @OA\Post(
 *     path="/datingapp/api/subscription_update/{old_id}/{new_id}",
 *      tags={"Subscription"},
 *     summary="Upgrade Subscription",
 * 
 *   @OA\Parameter(
 *         name="old_id",
 *         in="path",
 *         description="ID of Old Subscription",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *  *   @OA\Parameter(
 *         name="new_id",
 *         in="path",
 *         description="ID of New Subscription",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function upgrade_subscription($old_subscription_id, $new_subscription_id)
    {
        $user = auth()->user();

        $old_subscription = SubscriptionProfileDetail::where('profile_id', $user->id)
                                                    ->where('subscription_id', $old_subscription_id)
                                                    ->where('status', 'active')
                                                    ->first();

        if (!$old_subscription) {
            return response()->json(['Message' => 'Old subscription not found'], 400);
        }

        if ($old_subscription->end_date < now()) {
            return response()->json(['Message' => 'Old subscription has already expired'], 400);
        }
        $new_subscription = Subscription::find($new_subscription_id);
        $new_expiry_date = now()->addMonths($new_subscription->months);

        $current_date = today();

        $old_subscription->subscription_id = $new_subscription_id;
        $old_subscription->strt_date = $current_date;
        $old_subscription->end_date = $new_expiry_date;
        $old_subscription->renewal_date = $new_expiry_date;
        $old_subscription->save();

        return response()->json(['Message' => 'Subscription upgraded successfully'], 200);
    }

    public function check_payment(Request $request)
    {
        $reqData = $request->all();

        return response()->json(['ReqDATA' => $reqData]);
    }
}
