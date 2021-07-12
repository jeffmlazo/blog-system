<?php

use App\Models\User;
use App\Http\Controllers\UserController;
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

// Route::post('user/create', 'UserController@create');
Route::get('/user', [UserController::class, 'index']);
// Route::post('/user', [UserController::class, 'create']);
// Route::get('posts', function () {
Route::get('users', function () {
    return User::all();
});
