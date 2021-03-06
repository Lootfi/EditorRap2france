<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('queue:listen --timeout=0 ')->withoutOverlapping()->runInBackground();;
        $schedule->command('command:PublishArticles')->withoutOverlapping();
        $schedule->command('command:getNewArticles')->withoutOverlapping();
        $schedule->command('command:getAnalytics ')->hourly()->withoutOverlapping();
        $schedule->command('command:deleteImagesFromServer')->withoutOverlapping();
        $schedule->command('command:populateInstagram')->hourly()->withoutOverlapping();
        $schedule->command('command:syncDatabase')->hourly()->withoutOverlapping();

    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
