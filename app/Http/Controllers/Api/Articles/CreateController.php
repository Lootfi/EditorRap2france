<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Carbon\Carbon;
use App\Models\Hashtag;
use App\Models\ArticleHashtag;
use JWTAuth;

class CreateController extends Controller
{
    public function createArticle(){


    		$article = new Article();
    		$article->titre = request('title');
    		$article->idcat = request('category');
    		$article->created_at = now();
    		$article->updated_at = now();
    		$article->dateactu = now();
    		$article->url = '/news/'.str_slug(request('title'));
    		$article->tag = str_slug(request('title'));
    		$article->admin_creator_id = JWTAuth::parseToken()->authenticate()->id;
    		$article->contenuJson = request('data');
            if(request('avatar')){  
                $imageData = request('avatar');
                $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
                $AvatarPath =public_path('images/admin/articles/avatars/').$fileName;
                \Image::make(request('avatar'))->save($AvatarPath);
                $article->image = $fileName;
            }
    		$article->save();

            if(request('hashtags')){
                
                foreach(request('hashtags') as $hashtag){

                    $hashtag = preg_replace('/\s+/', '_', ucfirst($hashtag));
                    if($hashtag[0] !="#"){
                        $hashtag = "#".$hashtag;
                    }
                    if(!($dbHashtag  = Hashtag::where('nom',$hashtag)->first())){

                        $dbHashtag = new Hashtag();
                        $dbHashtag->nom = $hashtag;
                        $dbHashtag->save();
                    }

                    $hashInstance = new ArticleHashtag();
                    $hashInstance->actualite_id = $article->id;
                    $hashInstance->hashtag_id= $dbHashtag->id;
                    $hashInstance->status = 1;
                    $hashInstance->save();

                }
            }

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