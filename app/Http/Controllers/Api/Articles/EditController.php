<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Carbon\Carbon;
use JWTAuth;
use ImageOptimizer;
use App\Models\Hashtag;
use App\Models\ArticleHashtag;
use File;
use LaravelShortPixel;
use Storage;
use App\Models\ImageArticle;
use App\Jobs\ModifyImageInServer;
use Artisan;
require_once base_path('vendor/shortpixel/shortpixel-php/lib/shortpixel-php-req.php');
class EditController extends Controller
{
    public function editArticle($tag){



    	$article = Article::fetchByTag($tag);
    	$article->titre = request('title');
        $article->idcat= request('category');
    	$article->updated_at = now();
    	$article->url = '/news-'.str_slug(request('title'))."-".$article->id.".html";
    	$article->tag = str_slug(request('title'))."-".$article->id;
        $article->contenutext = strip_tags(request('formattedJsonContent'));
    	$article->contenuJSON = json_encode(request('data'));
        $article->contenu = request('formattedJsonContent');
        if(request('dateactu')){

            $article->dateactu = request('dateactu');
        }
       
        $article->save();

        

    		return $article;
			   
			
    }


    public function formatArticle(Request $request,$tag){


        $article = Article::fetchByTag($tag);
        $article->contenu = $request->content;
        $article->save();

        Artisan::call('command:UpdateArticle',['id' => $article->id]);

        return $article;
    }
}
