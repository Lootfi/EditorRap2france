<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
class publishPosts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:PublishArticles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This is a command that publishes the posts scheduled';

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
        $pendingArticles = \App\Models\Article::pending()->where('dateactu',"<=" ,Carbon::now())->get()->map(function($item,$index){

                $item->publish();
        });

        echo "The articles Has been published";
    }
}
