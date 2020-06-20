<?php

namespace App\Http\Controllers\Api\Facebook;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Article;
class InstantController extends Controller
{
    public function exportMarkup($tag){

    	$article = Article::fetchByTag($tag);

    	$html = view('InstantTemplate',['article' => $article])->render();

		return $html;
    }
}
