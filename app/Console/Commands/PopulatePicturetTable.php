<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Article;
use App\Models\ImageArticle;
use DB;

class PopulatePicturetTable extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:populateDatabase';

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
     * @return mixed
     */
    public function handle()
    {

       $images =  DB::connection('R2F')->table('R2F_news_image')->select('*')->get()->toArray();
     $images = json_decode( json_encode($images), true);
     DB::table('r2f_news_image')->insertOrIgnore($images); 

       echo "success";
    }
}
