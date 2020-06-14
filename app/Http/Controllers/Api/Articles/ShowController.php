<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ShowController extends Controller
{
    public function showArticle($tag){



    	if($article = Article::fetchByTag($tag)){

    

    		return $article;
    		
    	}

    	return response()->json("Article not found");
    }
}
