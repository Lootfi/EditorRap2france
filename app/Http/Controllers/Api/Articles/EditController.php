<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Carbon\Carbon;
use JWTAuth;


class EditController extends Controller
{
    public function editArticle($tag){


    	$article = Article::fetchByTag($tag);
    	$article->titre = request('title');
    	$article->updated_at = now();
    	$article->url = '/news/'.str_slug(request('title'));
    	$article->tag = str_slug(request('title'));
    	$article->admin_creator_id = JWTAuth::parseToken()->authenticate()->id;
    	$article->contenuJson = request('data');
    	$article->save();

    		return $article;
			   
			
    }
}
