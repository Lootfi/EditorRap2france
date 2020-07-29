<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use JWTAuth;
use DB;
use App\Http\Resources\ArticleCollection;

class IndexController extends Controller
{
    
    public function getAllArticles(){

    		return DB::table('r2f_new_actualite_testing_copy AS articles')
    		->join('r2f_new_actualite-categorie AS categorie','articles.idcat','=','categorie.id')
    		->join('r2f_new_adminstrators AS creator','articles.admin_creator_id','=','creator.id')
    		->select('articles.titre','articles.image','articles.tag','articles.created_at','articles.status','articles.contenuJSON','categorie.nom as Category_name','creator.full_name as Full_Name')
    		->orderBy('articles.created_at','DESC')
    		->get();
    		
    		
    	// return new ArticleCollection(Article::all());

    			

    }

}
