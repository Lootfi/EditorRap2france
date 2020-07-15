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
require_once base_path('vendor/shortpixel/shortpixel-php/lib/shortpixel-php-req.php"');
class EditController extends Controller
{
    public function editArticle($tag){



    	$article = Article::fetchByTag($tag);
    	$article->titre = request('title');
        $article->idcat= request('category');
    	$article->updated_at = now();
    	$article->url = '/news-'.str_slug(request('title'))."-".$article->id.".html";
    	$article->tag = str_slug(request('title'))."-".$article->id;
        $article->contenutext = request('text');
    	$article->contenuJson = request('data');
        $article->contenu = request('formattedJsonContent');
        if(request('dateactu')){

            $article->dateactu = request('dateactu');
        }
        if(request('avatar')){  
        $imageData = request('avatar');
        $fileName = sprintf("%s-%s.jpg",str_slug(request('title')), time());
        $oldAvatar = public_path('images/admin/articles/avatars/').$article->image;
        \ShortPixel\setKey(env('SHORT_PIXEL_API_KEY'));
        $dimensions = [['660','330'],['315','180'],['300','180'],['155','90'],['290','380'],['320','320'], ['290','150'],['145','250'],['32','32'],['240','145'],['100','60']];
        $densities =['mdpi','xhdpi'];
            File::delete($oldAvatar);
            $AvatarPath = public_path('images/admin/articles/avatars/').$fileName;
            \Image::make(request('avatar'))->save($AvatarPath);
            ImageOptimizer::optimize($AvatarPath);

            foreach($dimensions as $dimension){

                    foreach($densities as $density ){
                       $directory = "images/admin/articles/avatars/optimized/".$article->id."/".$dimension[0]."x".$dimension[1]."/".$density;
                        if(!Storage::exists($directory)){
                            Storage::makeDirectory($directory);
                    }
                            File::delete($directory."/".$article->image)
                        \ShortPixel\fromFile($AvatarPath)->optimize(2)->resize($dimension[0],$dimension[1])->toFiles($directory);
                    }
                }

            $article->image = $fileName;

            $imgtosend = str_replace(' ', 'SPACESEPARATOR', $fileName);
            $urltosend = "https://img.rap2france.com/public/medias/r2f_new-downloadimg-2.php?img=".$imgtosend."&id=".$article->id."&url=".url('/');
            $ch = curl_init($urltosend);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                    curl_setopt($ch, CURLOPT_PROXY, "113.52.144.36");
                    curl_setopt($ch, CURLOPT_PROXYPORT, "9339");
                    curl_setopt($ch, CURLOPT_PROXYUSERPWD, "allwebnet@gmail.com:dtNj0hSa");
                    curl_setopt($ch, CURLOPT_HEADER, 0);
                    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0');
                    $data = curl_exec($ch);
                    $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

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
                
                foreach(request('artists') as $key =>  $artist){

                    array_push($ArtistsWithRank,['artist_id' => $artist['value'] , 'rank' => $key + 1]);
                }

                $article->artists()->sync($ArtistsWithRank);

            }

        
    	$article->save();

    		return $article;
			   
			
    }
}
