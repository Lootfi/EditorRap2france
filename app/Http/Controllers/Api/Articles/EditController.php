<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Carbon\Carbon;
use JWTAuth;
use File;
class EditController extends Controller
{
    public function editArticle($tag){


    	$article = Article::fetchByTag($tag);
    	$article->titre = request('title');
    	$article->updated_at = now();
    	$article->url = '/news/'.str_slug(request('title'));
    	$article->tag = str_slug(request('title'));
    	$article->admin_creator_id = JWTAuth::parseToken()->authenticate()->id;
    	$article->contenuJson = request('data');
        if(request('avatar')){  
            $imageData = request('avatar');
            $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
            $oldAvatar = public_path('images/admin/articles/avatars/').$article->image;
            File::delete($oldAvatar);
            $AvatarPath =public_path('images/admin/articles/avatars/').$fileName;
            \Image::make(request('avatar'))->save($AvatarPath);
            $article->image = $fileName;
        }

        
    	$article->save();

    		return $article;
			   
			
    }
}