<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use DB;
use App\Models\InstagramPicture;
use Instagram\Api;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;

class populateInstagramTable extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:populateInstagram';

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

        $media = collect($profile->getMedias());
        $media = $media->filter(function($item,$index){

            return $item->isVideo() == false;
        });



        $pictureArray = [];

        foreach($media as $element) {

            $itemArray = ['shortcode' =>$element->getShortCode() , 'image_src' =>$element->getDisplaySrc() ,'thumbnail_src' =>$element->getThumbnailSrc(),'created_at' => now(),'updated_at' => now() ];
            array_push($pictureArray,$itemArray);

        }

        DB::table('r2f_new_instagram_pictures')->insertOrIgnore($pictureArray);
            

       }

}
