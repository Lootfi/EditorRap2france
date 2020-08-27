<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use DB;
use App\Models\InstagramPicture;
use Instagram\Api;
use InstagramScraper\Instagram;
use Carbon\Carbon;

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
       $instagram = new \InstagramScraper\Instagram();
        $medias = $instagram->getMedias('rap2france', 25);

        // Let's look at $media

        $medias = collect($medias)->filter(function($item,$index){ 

                    return $item->getType() != "video";
                });

        $pictureArray = [];

            foreach($medias as $element) {

                    $itemArray = ['shortcode' =>$element->getShortCode() , 'image_src' =>$element->getImageHighResolutionUrl() ,'posted_at' => Carbon::parse($element->getCreatedTime()),'created_at' => now(),'updated_at' => now() ];
                    array_push($pictureArray,$itemArray);

                }

        DB::table('r2f_new_instagram_pictures')->insertOrIgnore($pictureArray);
            

       }

}
