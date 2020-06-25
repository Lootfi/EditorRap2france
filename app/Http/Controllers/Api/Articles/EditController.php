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
class EditController extends Controller
{
    public function editArticle($tag){



    	$article = Article::fetchByTag($tag);
    	$article->titre = request('title');
        $article->idcat= request('category');
    	$article->updated_at = now();
    	$article->url = '/news/'.str_slug(request('title'));
    	$article->tag = str_slug(request('title'));
        $article->contenutext = request('text');
    	$article->contenuJson = request('data');
        $article->contenu = request('formattedJsonContent');
        if(request('dateactu')){

            $article->dateactu = request('dateactu');
        }
        if(request('avatar')){  
            $imageData = request('avatar');
            $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
            $oldAvatar = public_path('images/admin/articles/avatars/').$article->image;
            File::delete($oldAvatar);
            $AvatarPath =public_path('images/admin/articles/avatars/').$fileName;
            \Image::make(request('avatar'))->save($AvatarPath);
            ImageOptimizer::optimize($AvatarPath);

            $article->image = $fileName;
        }

        if(request('featured')){

                $daterange = explode(" ",request('featured'));
                if(! $featured = \App\Models\FeaturedArticle::where('article_id',$article->id)->first()){
                  $featured = new FeaturedArticle();
                }
                $featured->article_id = $article->id;
                $featured->date_start = $daterange[0]." ".$daterange[1];
                $featured->date_end = $daterange[3]." ".$daterange[4];
                $featured->save();

            }

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
                 $article->hashtags()->sync($hashtagArray);

            }
            
            if(request('artists')){

                $ArtistsWithRank = [];
                
                foreach(request('artists') as$key =>  $artist){

                    array_push($ArtistsWithRank,['artist_id' => $artist['value'] , 'rank' => $key+1]);
                }

                $article->artists()->sync($ArtistsWithRank);

            }

        
    	$article->save();

    		return $article;
			   
			
    }
}
