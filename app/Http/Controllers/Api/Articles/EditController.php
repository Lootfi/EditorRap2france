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
        if(request('avatar')){  
        $oldImageName = $article->image;
        $imageData = request('avatar');
        $fileName = sprintf("%s-%s.jpg",str_slug(request('title')), time());
        $AvatarPath = public_path('images/admin/articles/avatars/').$fileName;
        \Image::make(request('avatar'))->save($AvatarPath);
        ImageOptimizer::optimize($AvatarPath);
        $article->image = $fileName;
         ModifyImageInServer::dispatch($fileName, $article->id,url('/'),$oldImageName);
        }
        $article->alaune = "0";
        $article->save();


        if(request('featured')){

                $daterange = explode(" ",request('featured'));
                if(! $featured = \App\Models\FeaturedArticle::where('article_id',$article->id)->first()){
                  $featured = new FeaturedArticle();
                  $featured->article_id = $article->id;

                }
                $featured->date_start = $daterange[0]." ".$daterange[1];
                $featured->date_end = $daterange[3]." ".$daterange[4];
                $featured->save();


                $article->alaune = "1";
                $article->save();

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
                
                foreach(request('artists') as $key =>  $artist){

                    array_push($ArtistsWithRank,['artist_id' => $artist['value'] , 'rank' => $key + 1]);
                }

                $article->artists()->sync($ArtistsWithRank);

            }


            foreach(json_decode($article->contenuJSON,true)['blocks'] as $key =>  $block){

                if($block['type'] == 'image' && !preg_match('#^https://img.rap2france.com#', $block['data']['file']['url'])){


                        $image = new ImageArticle();
                        $image->idnews = $article->id;
                        $image->image = $block['data']['file']['name'];
                        $image->created_at = now();
                        $image->updated_at = now();
                        $image->save(); 
                        $urltosend = "https://img.rap2france.com/public/medias/r2f_new-downloadimg-corps-dimension.php?imgUrl=".$block['data']['file']['url']."&id=".$image->id."&url=".url('/')."&name=".$image->image;

                        $ch = curl_init($urltosend);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
                        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                        curl_setopt($ch, CURLOPT_HEADER, 0);
                        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0');
                        $data = curl_exec($ch);
                        $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);      //Here we fetch the HTTP response code
                        $jsonContent = json_decode($article->contenuJSON,true);

                        $jsonContent['blocks'][$key]['data']['file']['url'] ="https://img.rap2france.com/public/medias/news/image/".$image->id."/raw/mdpi/".$block['data']['file']['name']; 

                        $article->contenuJSON = json_encode($jsonContent);
                        $article->save();

                    }

                    
                }




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
