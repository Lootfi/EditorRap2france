<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/auth/login', 'Auth\LoginController@login');
Route::get('/auth/logout','Auth\LoginController@logout');
Route::get('/auth/checkAuthToken','Auth\LoginController@checkAuth');


Route::group(['middleware' => ['jwt.verify']],function(){

	Route::post('/auth/password-reset','Auth\PasswordReset@reset');
	// ** -- Routes accessible only for Admins role -- ** 
	Route::group(['prefix' => 'users' ,'namespace' => 'Users'],function(){
	Route::get('/' , 'IndexController@getAllUsers');
	Route::post('/add-new-user', 'CreateController@createUser');
	Route::get('/{slug}', 'ShowController@showUser');
	Route::post('/{slug}/edit', 'EditController@editUser');
	Route::get('/{slug}/activate','StatusController@activateUser');
	Route::get('/{slug}/suspend','StatusController@suspendUser');
	Route::get('/{slug}/delete','DeleteController@deleteUser');
	Route::post('/{slug}/uploadAvatar','AvatarController@uploadAvatar');
});
	


Route::group(['prefix' => 'user', 'namespace' => 'User'],function(){

	Route::get('/my-article','ArticleController@index');
});

Route::group(['prefix' => 'articles' ,'namespace' => 'Articles'],function(){

	Route::get('/' , 'IndexController@getAllArticles');
	Route::get('/{tag}','ShowController@showArticle');
	Route::post('/{tag}/edit','EditController@editArticle');
	Route::post('/add-new-article','CreateController@createArticle');
	Route::post('/{tag}/edit/format','EditController@formatArticle');
	Route::post('/{tag}/format','CreateController@formatArticle');
	Route::post('/uploadImageByFile','CreateController@uploadImageByFile');
	Route::get('/{tag}/delete','DeleteController@deleteArticle');


});

Route::group(['prefix' => 'analytics' ,'namespace' => 'Analytics'],function(){
	Route::get('/{analyticType}/{maxResults}', 'AnalyticController@getMostViewedPages')->name('analytics');
});

Route::group(['prefix' => 'settings', 'namespace' =>'Settings'],function(){

	Route::group(['prefix' => 'categories', 'namespace' =>'Categories'],function(){
			Route::get('/' , 'IndexController@getAllCategories');
	});
	Route::group(['prefix' => 'hashtags', 'namespace' =>'Hashtags'],function(){
			Route::get('/' , 'IndexController@getAllHashtags');
	});
	Route::group(['prefix' => 'artists', 'namespace' =>'Artists'],function(){
			Route::get('/' , 'IndexController@getAllArtists');
			Route::post('/add-new-artist','CreateController@createArtist');
			Route::get('/{slug}','ShowController@showArtist');
			Route::post('/{slug}/edit','EditController@EditArtist');
	});

});

});

	Route::get('/{slug}/exportToFacebookArticle','Facebook\InstantController@exportMarkup');
	Route::get('/{slug}/getView','Facebook\InstantController@getView');
	Route::post('/TestForm','Test\TestController@test');

	



	Route::feeds();
	
