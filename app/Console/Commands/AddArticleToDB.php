<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Article;
use DB;

class AddArticleToDB extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:AddArticle';

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



       $article = Article::latest()->first();

        DB::connection('R2F')->table('R2F_actualite')->insert([
            'alaune' => $article->alaune,
            'auteur' => $article->auteur,
            'contenu' => $article->contenu ,
            'contenutext' => $article->contenutext,
            'created_at'=> $article->created_at,
            'updated_at' => $article->updated_at,
            'dateactu' => $article->dateactu,
            'diapo' => $article->diapo,
            'id' => $article->id,
            'idcat' => $article->idcat,
            'identifier' => $article->identifier,
            'image' => $article->image,
            'keywords' => $article->keywords,
            'program' => $article->program,
            'signature' => $article->signature,
            'tag' =>$article->tag,
            'titre' => $article->titre,
            'url'=> $article->url,
        ]);

    
    }
}
