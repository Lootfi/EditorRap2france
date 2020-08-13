<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Article;
use Carbon\Carbon;
use App\Models\Artist;
use File;

class DeleteImageFolderFromServer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:deleteImagesFromServer';

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
        $articles = Article::where('updated_at','<',Carbon::now()->subMinutes(10))->get();


        $dimensions = [['660','330'],['315','180'],['300','180'],['155','90'],['290','380'],['320','320'], ['290','150'],['145','250'],['32','32'],['240','145'],['100','60']];
        $densities = ['mdpi','xhdpi'];

       foreach($articles as $article){

            foreach($dimensions as $dimension){
                foreach($densities as $density ){
                    $directory = public_path("images/admin/articles/avatars/optimized/").$article->id."/".$dimension[0]."x".$dimension[1]."/".$density."/".$article->image;
                 File::delete($directory);
                }
            }
       }
       $artists = Artist::where('updated_at','<',Carbon::now()->subMinutes(10))->get();
       $dimensions = [['122','122'], ['130','130'],['220','220'],['50','50'],['60','60'],['72','72'],['90','54'],['raw','raw']];
        $densities = ['mdpi','xhdpi'];
       foreach($artists as $artist){

            foreach($dimensions as $dimension){
                foreach($densities as $density ){
                    if($dimension[0] == "raw"){

                        $directory = public_path("images/admin/artists/avatars/optimized/").$artist->id."/raw/".$density."/".$artist->image;

                    }else{

                        $directory = public_path("images/admin/artists/avatars/optimized/").$artist->id."/".$dimension[0]."x".$dimension[1]."/".$density."/".$artist->image;
                         
                    }
                   
                 File::delete($directory);
                }
            }
       }
       echo "succes";
    }
}
