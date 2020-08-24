<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request; 
use App\Models\Article;
use DB;

class ShowController extends Controller
{
    public function showArticle($tag){



    	if($article = Article::fetchByTag($tag)){

 
    		$article->makeVisible('contenuJSON');
    		$article->makeVisible('contenu');
    		$article->append(['StatusName','Category','CreatedAtAgo','ContenuFormat','Hashtags','Artists','isFeatured']);
    		return $article;
    		
    	}

    	return response()->json("Article not found");
    }


    
    }

