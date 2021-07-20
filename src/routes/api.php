<?php

use App\Models\User;
use App\Http\Controllers\UserApiController;
use App\Http\Controllers\PostApiController;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('user', 'UserApiController@index');
// Route::post('user/create', 'UserController@create');
// Route::get('user', [UserController::class, 'index']);

// Route::get('/user', [UserApiController::class, 'create']);
// Route::get('user', 'App\\Http\\Controllers\\UserApiController@index');
// Route::post('/user', [UserController::class, 'create']);
// Route::get('posts', function () {
// Route::get('users', function () {
//     return User::all();
// });

// User API Routes
Route::get('/user', [UserApiController::class, 'index']);
Route::get('/user/create', [UserApiController::class, 'create']);
Route::post('/user/store', [UserApiController::class, 'store']);
Route::post('/user/login', [UserApiController::class, 'login']);
Route::get('/user{id}/edit', [UserApiController::class, 'edit']);
Route::put('/user{id}', [UserApiController::class, 'update']);
Route::delete('/user{id}', [UserApiController::class, 'destroy']);
Route::get('/user{id}', [UserApiController::class, 'show']);

// Post API Routes
Route::get('/post', [PostApiController::class, 'index']);
Route::get('/post/create', [PostApiController::class, 'create']);
Route::post('/post/store', [PostApiController::class, 'store']);
Route::get('/post{id}/edit', [PostApiController::class, 'edit']);
Route::put('/post{id}', [PostApiController::class, 'update']);
Route::delete('/post{id}', [PostApiController::class, 'destroy']);
Route::get('/post{id}', [PostApiController::class, 'show']);
