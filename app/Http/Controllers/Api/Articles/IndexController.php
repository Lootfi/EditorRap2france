<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use JWTAuth;
use DB;

class IndexController extends Controller
{
    
    public function getAllArticles(){

    		
    		return Article::OrderBy('created_at','DESC')->take(50)->get();

    }


    public function populateDatabase(){

    	$lastArticle = Article::latest()->first();
    	$articles = DB::connection('R2F')->table('R2F_actualite')->select('alaune', 'auteur', 'contenu', 'contenutext', 'created_at', 'dateactu', 'diapo', 'id', 'idcat', 'identifier', 'image', 'keywords', 'program', 'signature', 'tag', 'titre', 'updated_at', 'url')->where('id','>',$lastArticle->id)->get()->toArray();
    	$articles = json_decode( json_encode($articles), true);
    	DB::table('r2f_new_actualite_testing_copy')->insert($articles);
    	return "Success";
    	    }
}
