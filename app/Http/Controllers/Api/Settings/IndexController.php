<?php

namespace App\Http\Controllers\Api\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\SocialCount;
use InstagramScraper\Instagram;
use Carbon\Carbon;

class IndexController extends Controller
{
    public function getStatistics(){


    	$stats = DB::table('r2f_new_social_count')
    		->select('*')
    		->limit(1)
    		->get();

    	return response()->json($stats[0]);

    }

    public function setStatistic(){

    	$count = SocialCount::first();

    	switch (request('holder')){

    		case "instagram":

    			$count->instagram = request('value');

    			break;
    			case "facebook":

    			$count->facebook = request('value');

    			break;
    			case "twitter":

    			$count->twitter = request('value');

    			break;
    			case "youtube":

    			$count->youtube = request('value');

    			break;
    		
    	}
    	$count->save();

    	return $count;
    }

}
