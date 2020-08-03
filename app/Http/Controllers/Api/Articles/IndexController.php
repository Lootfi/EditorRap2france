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
    		->select('articles.id','articles.titre','articles.image','articles.tag','articles.created_at','articles.status','categorie.nom as Category','creator.full_name as CreatorFullName','creator.email as CreatorEmail', 'articles.type')
    		->orderBy('articles.created_at','DESC')->get();

            $articles->map(function($item,$index){

                $item->image = "https://cd1.rap2france.com/public/medias/news/".$item->id."/660x330/mdpi/".$item->image ;
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

}
