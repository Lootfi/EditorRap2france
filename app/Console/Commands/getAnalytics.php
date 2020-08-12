<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Analytics;
use DB;
use App\PageTodayReviews;
use Carbon\Carbon;
use App\Models\Article;
use Spatie\Analytics\Period;

class getAnalytics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:getAnalytics ';

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
        $timestamps = ['today','yesterday','week','current_month','last_month'];

        foreach($timestamps as $timestamp){

            switch ($timestamp) {
             Case 'today' : 
            $mostViewedPages =  Analytics::fetchMostVisitedPages(Period::days(1) ,500);
        break;
            Case 'yesterday' :
            $today = Carbon::today();
            $yesterday = Carbon::yesterday()->subWeekdays(1);
    
            //  Get Page views for yesterday
            $mostViewedPages = Analytics::fetchMostVisitedPages(Period::create($yesterday,$today) ,500);
        break;
            Case 'week' : 
        //  Get Page views for the week
            $mostViewedPages = Analytics::fetchMostVisitedPages(Period::days(7),500);
            break;

            Case 'current_month' : 
             $today = Carbon::today();
             $start_month =  Carbon::today()->startOfMonth();
             $mostViewedPages = Analytics::fetchMostVisitedPages(Period::create($start_month,$today) ,500);
             
            break;
            Case 'last_month' : 
             $current_month = Carbon::today();
             $last_month =  Carbon::today()->startOfMonth()->subMonth();
             $mostViewedPages = Analytics::fetchMostVisitedPages(Period::create($last_month,$current_month) ,500);
            break;
            default : 
            
            return redirect(Route('analytics',['today',100]));
        }

        $filteredMostViewedPage = array();

        $add_date = now();


        foreach($mostViewedPages as $page){

        if($actualité = Article::where('tag',str_replace(['/news-','.html'],'',$page['url']))->first() ){ //If the article exists else skip it
            $actualiteArray = ['actualite_id' => $actualité->id , 'views' => $page['pageViews'] , 'add_date' => $add_date];
            //add the article array to the filtered array
            array_push($filteredMostViewedPage ,$actualiteArray);
       
            }
        }
        $filteredMostViewedPage = array_reverse(array_values(array_column(
            array_reverse($filteredMostViewedPage),
            null,
            'actualite_id'
        )));
        
        
        $column = null;
        foreach($filteredMostViewedPage as $pagereview){

            $column = $column . "(" . $pagereview['actualite_id'] .",".$pagereview['views'].",'".$pagereview['add_date']."'),";
        }

        $sql = "INSERT INTO r2f_new_actualite_analytics_". $timestamp ." (actualite_id,views,add_date) VALUES " ."".rtrim($column,",") ." ON DUPLICATE KEY UPDATE views = VALUES(views),add_date = VALUES(add_date);";
        DB::statement($sql);
        DB::table("r2f_new_actualite_analytics_". $timestamp)->where('add_date','!=',$add_date)->delete();
        
        echo "Sucesfully updated ! \n";

        }
    }
}
