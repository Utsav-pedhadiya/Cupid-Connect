<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Stripe\Stripe;
use App\Models\Payment;

class UpdatePaymentStatuses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'payments:update-statuses';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the status of pending payments based on Stripe confirmation';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        // Retrieve pending payments
        $pendingPayments = Payment::where('status', 'Pending')->get();

        foreach ($pendingPayments as $payment) {
            $this->updatePaymentStatus($payment);
        }

        $this->info('Payment statuses updated successfully!');

        return self::SUCCESS;
    }

    private function updatePaymentStatus(Payment $payment): void
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET'));
            $paymentIntent = \Stripe\PaymentIntent::retrieve($payment->transaction_id);

            if ($paymentIntent->status === 'succeeded') {
                $payment->status = 'Succeeded';
                $payment->save();
                $this->info("Payment #{$payment->id} status updated to succeeded.");
            } else {
                // Handle other payment statuses (e.g., failed)
                $this->warn("Payment #{$payment->id} status is {$paymentIntent->status}. No update performed.");
            }
        }  catch (\Stripe\Exception\CardException $e) {
            $this->error("Error updating payment #{$payment->id}: " . $e->getMessage());
        }
    }
}
