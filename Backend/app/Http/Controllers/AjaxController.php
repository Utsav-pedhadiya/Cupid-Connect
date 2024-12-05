<?php

namespace App\Http\Controllers;

use App\Models\Cities;
use App\Models\Country;
use App\Models\Payment;
use Illuminate\Http\Request;
use App\Models\Subscription;
use App\Models\Profile;
use App\Models\SubscriptionProfileDetail;
use App\Models\User;
use Illuminate\Support\Facades\Redirect; 
use Stripe\Stripe;

class AjaxController extends Controller
{
    public function change_subscription_status(Request $request)
    {
        $reqData = $request->validate([
            'id' => 'required|exists:subscriptions,id',
            'status' => 'required|boolean',
        ]);
    
        $id = $reqData['id'];
        $status = $reqData['status'];
    
        $sub = Subscription::findOrFail($id);
    
        if ($sub->is_active != $status) {
            $sub->is_active = $status;
            $sub->save();
        }
    
        return response()->json(['message' => 'Subscription status updated successfully.']);
    }

    public function get_profile($id)
    {
        $result = Profile::find($id);
        return view('pages.offcanvas.profile', compact('result'));
    }

    public function get_subscription($id)
    {
        $result = Subscription::find($id);
        return view('pages.offcanvas.subscription', compact('result'));
    }

    public function fetch_subdetail($id)
    {
        $result = SubscriptionProfileDetail::find($id);
        // dd($result);
        $profile = Profile::get();
        $subscription = Subscription::get();
        return view('pages.modal.subcriptionProfile', compact('result','profile','subscription'));
    }

    public function user_detail($id)
    {
        $data= User::find($id);
        return view('pages.modal.admin-user-edit', compact('data'));
    }

    public function user_add()
    {
        return view('pages.modal.admin-user-add');
    }

    public function payment_detail($id)
    {
        $result = Payment::find($id);
        $profile = Profile::get();
        $subscription = Subscription::get();
        return view('pages.modal.payment-edit', compact('result','profile','subscription'));
    }

    public function updatePaymentStatus($id)
    {
        try {
            $user = auth()->user();

            $payment = Payment::find($id);

            Stripe::setApiKey(env('STRIPE_SECRET'));
            $paymentIntent = \Stripe\PaymentIntent::retrieve($payment->transaction_id);

            $find_subscription = Subscription::find($payment->subscription_id);
            $get_months = $find_subscription->months;

            $current_date = today();
            $expiry_date = today()->addMonths($get_months);

            $record = SubscriptionProfileDetail::where('payment_id',$id)->first();
            // dd($paymentIntent->status);
            if ($paymentIntent->status === 'succeeded') {
                $payment->status = 'Succeeded';
                $payment->save();
                
                if(!$record)
                {
                    $check = SubscriptionProfileDetail::where('profile_id',$payment->profile_id)->where('subscription_id',$payment->subscription_id)->where('status','active')->first();

                    if(!$check)
                    {
                        $store = new SubscriptionProfileDetail();
                        $store->profile_id = $payment->profile_id;
                        $store->payment_id = $id;
                        $store->subscription_id = $payment->subscription_id;
                        $store->strt_date = $current_date;
                        $store->end_date =  $expiry_date;
                        $store->renewal_date =  $expiry_date;
                        $store->auto_renewal =  '0';
                        $store->status =  'active';
                        $store->save();
                    }
                    else
                    {
                        return redirect()->route('payment')->with('error','You Already Have These Subscription');
                    }
                }
            } 
            else if($paymentIntent->status === 'failed')
            {
                $payment->status = 'Failed';
                $payment->save();
            }            
            else {
                $payment->status = 'Pending';
                $payment->save();
            }
            
        }  catch (\Stripe\Exception\CardException $e) {
        }
        return redirect()->route('payment');
    }

    public function nationality_ar(Request $request){
        $reqData = $request->all(); 
        $nationality = null;
        $city_ar = null;
        $country = $reqData['countryName'] ?? NULL;
        if($country){
            $nationality = Country::where('name',$reqData['countryName'])->first();
        }else{
        $city_ar = Cities::where('name',$reqData['cityName'])->first();
    }
        return response()->json(['res'=>$nationality,'city_ar'=>$city_ar]);
    }
   
}
