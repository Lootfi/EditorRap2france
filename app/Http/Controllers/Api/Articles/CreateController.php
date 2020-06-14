<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Carbon\Carbon;
use JWTAuth;

class CreateController extends Controller
{
    public function createArticle(){

    		$article = new Article();
    		$article->titre = request('title');
    		$article->idcat = 1;
    		$article->created_at = now();
    		$article->updated_at = now();
    		$article->dateactu = now();
    		$article->url = '/news/'.str_slug(request('title'));
    		$article->tag = str_slug(request('title'));
    		$article->admin_creator_id = JWTAuth::parseToken()->authenticate()->id;
    		$article->contenuJson = request('data');
    		$article->save();

    		return $article;
			   
			    }

    
    public function uploadImageByFile(){
    	
    	$imageData = request('avatar');
       	$fileName = Carbon::now()->timestamp ."-".$imageData->getClientOriginalName();
    	$ImagePath =public_path('images/admin/articles/').$fileName;
		\Image::make(request('avatar'))->save($ImagePath);
		$ImageUrl = "/images/admin/articles/".$fileName;
		return response()->JSON(['success' => 1 , "file" => ["url" => $ImageUrl]]);


    }
}
