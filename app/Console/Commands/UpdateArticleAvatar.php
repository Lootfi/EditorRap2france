<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use App\Models\Article;

class UpdateArticleAvatar extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:UpdateArticle {id}';

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
    $article = Article::findOrFail($this->argument('id'));
   DB::connection('R2F')->table('R2F_actualite')->
                          ->where('id', $article->id)
                          ->update(['image' => $article->image]);
    }
}
