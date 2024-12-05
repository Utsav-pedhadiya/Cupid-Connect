<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Console\Commands\UpdatePaymentStatusCommand;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->command('payment:update-status')->everyThreeMinutes(); // Adjust the schedule as needed
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }

    // protected $schedule = [
    //     // ... other schedule entries
    
    //     'payments:update-statuses' => [ // Adjust the schedule as needed
    //         'schedule' => '* * * * *', // Run every minute (for testing)
    //         // 'cron' => '0 0 * * *', // Run every day at midnight (replace with your desired frequency)
    //     ],
    // ];
}
