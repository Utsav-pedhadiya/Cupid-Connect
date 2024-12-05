<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Payment;
use App\Models\Subscription;
use App\Models\SubscriptionProfileDetail;
use Stripe\Stripe;

class UpdatePaymentStatusCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'payment:update-status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update payment status for pending payments';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $user = auth()->user();
            $payment_all = Payment::where('status', 'pending')->get();

            foreach ($payment_all as $payment_record) {

                $payment = $payment_record;
                Stripe::setApiKey(env('STRIPE_SECRET'));

                $paymentIntent = \Stripe\PaymentIntent::retrieve($payment->transaction_id);
                $find_subscription = Subscription::find($payment->subscription_id);

                $get_months = $find_subscription->months;
                $current_date = today();
                $expiry_date = today()->addMonths($get_months);

                $record = SubscriptionProfileDetail::where('payment_id', $payment->id)->first();

                if ($paymentIntent->status == 'succeeded') {
                    $payment->status = 'Succeeded';
                    $payment->save();
                    if (!$record) {
                        $check = SubscriptionProfileDetail::where('profile_id', $payment->profile_id)->where('subscription_id', $payment->subscription_id)->where('status', 'active')->first();
                        if (!$check) {
                            $store = new SubscriptionProfileDetail();
                            $store->profile_id = $payment->profile_id;
                            $store->payment_id = $payment->id;
                            $store->subscription_id = $payment->subscription_id;
                            $store->strt_date = $current_date;
                            $store->end_date =  $expiry_date;
                            $store->renewal_date =  $expiry_date;
                            $store->auto_renewal =  '0';
                            $store->status =  'active';
                            $store->save();
                        } else {
                            return response()->json(['Message' => 'You Already Have These Subscription', 'code' => '111'], 200);
                        }
                    }
                } elseif ($paymentIntent->status === 'failed') {
                    $payment->status = 'Failed';
                    $payment->save();
                } else {
                    $payment->status = 'Pending';
                    $payment->save();
                }
            }
        } catch (\Stripe\Exception\CardException $e) {
            // Handle card exception
        }
    }
}
