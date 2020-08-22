<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Article;
use App\Models\ImageArticle;
use DB;


class getNewArticles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:getNewArticles';

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
        $lastArticle = Article::latest()->first();
        $articles = DB::connection('R2F')->table('R2F_actualite')->select('alaune', 'auteur', 'contenu', 'contenutext', 'created_at', 'dateactu', 'diapo', 'id', 'idcat', 'identifier', 'image', 'keywords', 'program', 'signature', 'tag', 'titre', 'updated_at', 'url')->where('id','>',$lastArticle->id)->get()->toArray();
        $articles = json_decode( json_encode($articles), true);
        DB::table('r2f_new_actualite_testing_copy')->insert($articles);


        $lastArticleImage = ImageArticle::latest()->first();
        $images = DB::connection('R2F')->table('R2F_news_image')->select('id','idnews','image',
            'created_at', 'updated_at')->where('id','>',$lastArticleImage->id)->get()->toArray();
        $images = json_decode( json_encode($images), true);
        DB::table('r2f_news_image')->insert($images);


    }
}
