<?php

namespace App\Http\Controllers\Api\Facebook;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Facebook\InstantArticles\Client\Client;
use Facebook\InstantArticles\Transformer\Transformer;
use Facebook\InstantArticles\Elements\InstantArticle;

use App\Models\Article;
class InstantController extends Controller
{
    public function exportMarkup($tag){

    	$ia_client = Client::create(
			    '2673901616220491',
			    'dc0a4f7d0fde272fe26cbc4269505fc2',
			    'EAAlZC5jvZCyUsBAJX50obZAHuK2Fg4Ye1t7lHtZAVf3ZC5d6CxCZBnF9HKRCThDW1BHZCRYZARpirGD9B4LbKlvf1YeZCMEUq0a8R7s9i1O8WCQOEwQrTBB1fa87GbbDWZBriqW9VXsaozuCcY825V1ZBtBSY92WxFNJWarnS9Ch7m2FgZDZD',
			    '219424132922',
			    false
			);

	$transformer = new Transformer();

	$rules = file_get_contents(__DIR__ .'/simple_rules.json',true);
	$transformer->loadRules($rules);
    libxml_use_internal_errors(false);
	$html=file_get_contents('http://rapvue.test/api/'.$tag.'/getView',true);
	$document = new \DOMDocument();
	$document->loadHTML($html);
	libxml_use_internal_errors(true);
	$instant_article = InstantArticle::create();
	$transformer->transform($instant_article, $document);


	$ia_client->importArticle($instant_article);
		// $ia_client->importArticle(view('InstantTemplate',['article' => $article])->render());

		return "Success";
    }

    public function getView($tag){

    	    $article = Article::fetchByTag($tag);
    	    return view('InstantTemplate',['article' => $article]);

    }
}
