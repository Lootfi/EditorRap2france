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
            if(request('dateactu')){
                $article->dateactu = request('dateactu');
                $article->status = 1;
            }else{
                $article->dateactu = now();
                $article->status = 2;
            }
            
            $article->contenu = request('formattedJsonContent');
            $article->contenutext = request('text');
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
                

                $hashtagArray = [];

                foreach(request('hashtags') as $hashtag){

                    $hashtag = preg_replace('/\s+/', '_', ucfirst($hashtag['label']));

                    if($hashtag[0] !="#"){
                        $hashtag = "#".$hashtag;
                    }

                if(!($dbHashtag  = Hashtag::where('nom',$hashtag)->first())){
                        $dbHashtag = new Hashtag();
                        $dbHashtag->nom = $hashtag;
                        $dbHashtag->save();

                    }
                    
                    array_push($hashtagArray,$dbHashtag['id']);

                }
                 $article->hashtags()->attach($hashtagArray);

            }

            if(request('artists')){

                $ArtistsWithRank = [];
                
                foreach(request('artists') as$key =>  $artist){

                    array_push($ArtistsWithRank,['artist_id' => $artist['value'] , 'rank' => $key+1]);
                }

                $article->artists()->attach($ArtistsWithRank);

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
