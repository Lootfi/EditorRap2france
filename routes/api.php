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

Route::post('/auth/login', 'Api\Auth\LoginController@login');


Route::get('/users' , 'Api\Users\IndexController@getAllUsers');
Route::post('/users/add-new-user', 'Api\Users\CreateController@createUser');
Route::get('/users/{slug}', 'Api\Users\ShowController@showUser');
Route::post('/users/{slug}/edit', 'Api\Users\EditController@editUser');
Route::get('/users/{slug}/activate','Api\Users\StatusController@activateUser');
Route::get('/users/{slug}/suspend','Api\Users\StatusController@suspendUser');
Route::get('/users/{slug}/delete','Api\Users\DeleteController@deleteUser');