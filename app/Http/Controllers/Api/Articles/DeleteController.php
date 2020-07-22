<?php

namespace App\Http\Controllers\Api\Articles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Storage;
use Artisan;
use File;
class DeleteController extends Controller
{
    
    public function deleteArticle($tag){

    		if($article = Article::fetchByTag($tag)){
    			$AvatarPath = public_path('images/admin/articles/avatars/').$article->image;
    			$OptimizedPath = "images/admin/articles/avatars/optimized/".$article->id;
    			File::delete($AvatarPath);
    			Storage::deleteDirectory($OptimizedPath);

                if($article->ContenuFormat['type'] != "raw"){
                    Artisan::call("command:DeleteArticle",['id' => $article->id]);
                }

    			$article->delete();
    			return response()->JSON('Article Deleted');
    		}
    }
}
