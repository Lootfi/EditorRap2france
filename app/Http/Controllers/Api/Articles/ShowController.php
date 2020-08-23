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

        if(env('R2F_API_KEY') === request()->get('api_key')){

            if(request()->get('action') == "sync"){

               $article =  DB::connection('R2F')
               ->table('R2F_actualite')
                          ->select('alaune', 'auteur', 'contenu', 'contenutext', 'created_at', 'dateactu', 'diapo', 'id', 'idcat', 'identifier', 'image', 'keywords', 'program', 'signature', 'tag', 'titre', 'updated_at', 'url')
                          ->where('id',request()->get('id'))
                          ->get();

                         
                if(count($article) != 0 ){
                    $article = $article[0];
                     DB::table('r2f_new_actualite_testing_copy')
                    ->where('id',request()->get('id'))
                    ->update(['image' => $article->image,
                               'titre' => $article->titre,
                               'contenu' => $article->contenu ,
                                'contenutext' => $article->contenutext,
                                'updated_at' => $article->updated_at,
                                'idcat' => $article->idcat,
                                'tag' =>$article->tag,
                                'url'=> $article->url,
                                'dateactu' => $article->dateactu,
                                'created_at' => $article->created_at,
                                'alaune' => $article->alaune
                            ]);

                    return "success updated";

                    }else{

                    DB::table('r2f_new_actualite_testing_copy')
                    ->where('id',request()->get('id'))->delete();

                    return "Article Not found so Deleted ";

                    }           

            }else{

            

            return "Action not valide";
        }

        }

        return "no match";
    }
}
