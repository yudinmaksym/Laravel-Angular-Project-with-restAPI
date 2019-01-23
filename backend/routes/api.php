<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
});


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::match(['get', 'post'], '/post-users', 'UsersController@store')->middleware('auth:api');

Route::match(['get', 'post'], '/post-trans', 'UsersController@store')->middleware('auth:api');

Route::match(['get', 'post'], '/update-trans', 'UsersController@update')->middleware('auth:api');

Route::match(['get', 'post', 'delete'], '/delete-trans', 'UsersController@destroy')->middleware('auth:api');