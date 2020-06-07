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


// ** -- Routes accessible only for Admins role -- ** 


Route::group(['prefix' => 'users' ,'namespace' => 'Users'],function(){

	Route::get('/' , 'IndexController@getAllUsers');
	Route::post('/add-new-user', 'CreateController@createUser');
	Route::get('/{slug}', 'ShowController@showUser');
	Route::post('/{slug}/edit', 'EditController@editUser');
	Route::get('/{slug}/activate','StatusController@activateUser');
	Route::get('/{slug}/suspend','StatusController@suspendUser');
	Route::get('/{slug}/delete','DeleteController@deleteUser');

});



Route::group(['prefix' => 'articles' ,'namespace' => 'Articles'],function(){

	Route::get('/' , 'IndexController@getAllArticles');


});


