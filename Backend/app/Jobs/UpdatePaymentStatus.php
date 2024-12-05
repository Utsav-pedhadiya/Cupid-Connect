<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Payment;
use Stripe\Stripe;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class UpdatePaymentStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $payment;
    /**
     * Create a new job instance.
     */
    public function __construct(Payment $payment)
    {
        //
        $this->payment = $payment;
    }

   /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(): void
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET'));
            $paymentIntent = \Stripe\PaymentIntent::retrieve($this->payment->transaction_id);

            if ($paymentIntent->status === 'succeeded') {
                $this->payment->status = 'Succeeded';
                $this->payment->save();
                info("Payment #{$this->payment->id} status updated to succeeded.");
            } else {
                // Handle other payment statuses (e.g., failed)
                Log::warning("Payment #{$this->payment->id} status is {$paymentIntent->status}. No update performed.");
            }
        }  catch (\Stripe\Exception\CardException $e) {
            // Log the error using Laravel's logging system
            Log::error("Error updating payment #{$this->payment->id}: " . $e->getMessage());
        }
    }
}
