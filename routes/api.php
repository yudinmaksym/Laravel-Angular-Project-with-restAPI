<?php

use Illuminate\Http\Request;
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


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::match(['get', 'post'], '/post-users', 'UsersController@store')->middleware('auth:api');

Route::match(['get', 'post'], '/post-trans', 'UsersController@store')->middleware('auth:api');

Route::match(['get', 'post'], '/update-trans', 'UsersController@update')->middleware('auth:api');

Route::match(['get', 'post', 'delete'], '/delete-trans', 'UsersController@destroy')->middleware('auth:api');