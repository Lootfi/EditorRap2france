<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;

class SyncDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:syncDatabase';

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
        $articles = DB::table('r2f_new_actualite_testing_copy')
                    ->select('r2f_new_actualite_testing_copy.id')
                    ->join('R2F_actualite','r2f_new_actualite_testing_copy.id','=','R2F_actualite.id','left outer')
                    ->whereNull('R2F_actualite.id')
                    ->get();

        foreach($articles as $article){

            DB::table('r2f_new_actualite_testing_copy')->where('id',json_decode(json_encode($article),true)['id'])->delete();
        }

        $updatedArticles = DB::table('r2f_new_actualite_testing_copy AS testing')
                    ->select('testing.id','testing.updated_at')
                    ->join('R2F_actualite','testing.id','=','R2F_actualite.id','left outer')
                    ->whereRaw('R2F_actualite.updated_at != testing.updated_at')
                    ->get();


        foreach($updatedArticles as $article){

           $updatedArticle =  DB::table('R2F_actualite')->select('alaune', 'auteur', 'contenu', 'contenutext', 'created_at', 'dateactu', 'diapo', 'id', 'idcat', 'identifier', 'image', 'keywords', 'program', 'signature', 'tag', 'titre', 'updated_at', 'url')->where('id',json_decode(json_encode($article),true)['id'])->get();

        }
    }
}
