<?php

namespace App\Observers;

use App\Jobs\UpdatePaymentStatus;
use App\Models\Payment;

class PaymentObserver
{
    /**
     * Handle the "created" event for the payment.
     *
     * @param Payment $payment
     * @return void
     */
    public function created(Payment $payment)
    {
        UpdatePaymentStatus::dispatch($payment);
    }
}
