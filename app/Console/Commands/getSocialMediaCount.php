<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Instagram\Api;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;


class getSocialMediaCount extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:getSocialMediaCount';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

         $cachePool = new FilesystemAdapter('Instagram', 0, __DIR__ . '/../cache');

        $api = new Api($cachePool);
        $api->login(env('INSTAGRAM_USER'), env('INSTAGRAM_PASSWORD')); 
        $profile = $api->getProfile('rap2france');

        $array = ['instagram' => $profile->getFollowers()];
        DB::table("r2f_new_social_count")->updateOrInsert($array);
    }

}
