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


    public function sync(){

       return  DB::table('r2f_new_actualite_testing_copy AS testing')
                    ->select('testing.id','testing.updated_at')
                    ->join('R2F_actualite','testing.id','=','R2F_actualite.id','left outer')
                    ->whereRaw('R2F_actualite.updated_at != testing.updated_at')
                    ->get();

    }
    
    }

