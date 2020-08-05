<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use DB;
class addNewArtists extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:addNewArtists';

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
        
     $artists =  DB::connection('R2F')->table('R2F_artistes')->select('id','artiste','photoprofil','created_at','updated_at')->get();

      $artists =  $artists->map(function($item,$index){

        $item->image = $item->photoprofil;
        $item->name = $item->artiste;
        $item->slug = str_slug($item->artiste);
        $item->status = 1;
        return collect($item)->except(['artiste','photoprofil'])->toArray();
     });


     $artists = json_decode( json_encode($artists), true);
     DB::table('r2f_new_actualite-artistes')->insertOrIgnore($artists); 
    }
}
