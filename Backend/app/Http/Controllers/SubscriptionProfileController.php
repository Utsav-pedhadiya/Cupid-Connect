<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionProfileDetail;
use Illuminate\Http\Request;

class SubscriptionProfileController extends Controller
{
    public function index()
    {
        $subscription = SubscriptionProfileDetail::with('subscription','profile')->get();
        return view('pages.subscriptions.index',compact('subscription'));
    }

    public function update(Request $request)
    {
        $reqData = $request->all();
        // dd($reqData);
        $id = $reqData['id'];

        $get_detail = SubscriptionProfileDetail::find($id);

        $get_detail->update([
            // 'profile_id' => $reqData['profile_id'],
            'subscription_id' => $reqData['subscription_id'],
            'strt_date' => $reqData['strt_date'],
            'end_date' => $reqData['end_date'],
            'renewal_date' => $reqData['renewal_date'],
            'auto_renewal' => $reqData['auto_renewal'],
            'status' => $reqData['status'],
        ]);
    
        return redirect()->route('subscriptionprofile')->with('success', 'Subscription updated successfully.');
    }

    public function show($id)
    {
        $data = SubscriptionProfileDetail::with('subscription','profile')->find($id);
        return view('pages.subscriptions.show',compact('data'));
    }
}
