<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use DB;
use Carbon\Carbon;
use App\Http\Resources\ArticleCollection;

class IndexController extends Controller
{
    
    public function getAllArticles(){

    		$articles = DB::table('r2f_new_actualite_testing_copy AS articles')
    		->join('r2f_new_actualite-categorie AS categorie','articles.idcat','=','categorie.id')
    		->join('r2f_new_adminstrators AS creator','articles.admin_creator_id','=','creator.id')
    		->select('articles.id','articles.titre','articles.image','articles.updated_at','articles.tag','articles.created_at','articles.status','categorie.nom as Category','creator.full_name as CreatorFullName','creator.email as CreatorEmail', 'articles.type')
            ->where('articles.titre','like','%'.request('q').'%')
    		->orderBy('articles.created_at','DESC')
            ->limit('100')
            ->get();

            $articles->map(function($item,$index){

        if(now()->diffInSeconds($item->updated_at) < 60){

            $item->image =  "/images/admin/articles/avatars/". $item->image; 

       }else{

            $item->image = "https://cd1.rap2france.com/public/medias/news/".$item->id."/660x330/mdpi/".$item->image ;

       }
                
                $item->CreatedAtAgo = Carbon::createFromTimeStamp(strtotime($item->created_at))->diffForHumans();
                $item->created_at = Carbon::parse($item->created_at)->format('d.m.Y');
                if($item->status == 1) {

                    $item->StatusName = "Publié";
                }else{

                    $item->StatusName = "Non Publié";

                }
            });

            return $articles;

    			

    }


    public function getArticlesIndex(){

        $articles = DB::table('r2f_new_actualite_testing_copy AS articles')
            ->select('articles.id','articles.titre','articles.image','articles.tag','articles.updated_at')
            ->where('articles.titre','like','%'.request('q').'%')
            ->orderBy('articles.created_at','DESC')
            ->limit('10')
            ->get();

            $articles->map(function($item,$index){

                if(now()->diffInSeconds($item->updated_at) < 60){

            $item->image =  "/images/admin/articles/avatars/". $item->image; 

                }else{

            $item->image = "https://cd1.rap2france.com/public/medias/news/".$item->id."/660x330/mdpi/".$item->image ;

            }            
            });

            $array = [
            'pages' =>[ 
            'key' => 'title', 
            'data' => $articles
]];
        
            return $array;

    }

}
