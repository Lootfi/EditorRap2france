<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
class DeleteController extends Controller
{
    
    public function deleteArticle($tag){

    		if($article = Article::fetchByTag($tag)){
    			$article->delete();
    			return response()->JSON('Article Deleted');
    		}
    }
}
