<?php

namespace App\Http\Controllers\Api\Analytics;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Analytics;
use DB;
use App\PageTodayReviews;
use Carbon\Carbon;
use App\Models\Article;
use Spatie\Analytics\Period;

class AnalyticController extends Controller
{
    public function getMostViewedPages($analyticType ='today', $maxResults = 500){


        switch ($analyticType) {
             Case 'today' : 
            $mostViewedPages =  Analytics::fetchMostVisitedPages(Period::days(1) ,$maxResults);
        break;
            Case 'yesterday' :
            $today = Carbon::today();
            $yesterday = Carbon::yesterday()->subWeekdays(1);
    
            //  Get Page views for yesterday
            $mostViewedPages = Analytics::fetchMostVisitedPages(Period::create($yesterday,$today) ,$maxResults);
        break;
            Case 'week' : 
        //  Get Page views for the week
            $mostViewedPages = Analytics::fetchMostVisitedPages(Period::days(7),$maxResults);
            break;

            Case 'current_month' : 
             $today = Carbon::today();
             $start_month =  Carbon::today()->startOfMonth();
             $mostViewedPages = Analytics::fetchMostVisitedPages(Period::create($start_month,$today) ,$maxResults);
             
            break;
            Case 'last_month' : 
             $current_month = Carbon::today();
             $last_month =  Carbon::today()->startOfMonth()->subMonth();
             $mostViewedPages = Analytics::fetchMostVisitedPages(Period::create($last_month,$current_month) ,$maxResults);
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

        $sql = "INSERT INTO r2f_new_actualite_analytics_". $analyticType ." (actualite_id,views,add_date) VALUES " ."".rtrim($column,",") ." ON DUPLICATE KEY UPDATE views = VALUES(views),add_date = VALUES(add_date);";
        DB::statement($sql);
        DB::table("r2f_new_actualite_analytics_". $analyticType)->where('add_date','!=',$add_date)->delete();

        return "Sucesfully updated ! ";
    }

}
