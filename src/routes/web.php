<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostApiController;
use App\Http\Controllers\UserApiController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/user', [UserApiController::class, 'index']);
Route::get('/', function () {
    return view('welcome');
})->name('login');

Route::get('/logout', function () {
    Auth::logout();
    Cache::flush();
    redirect('/');
})->name('logout');

// Login Route
Route::group(['middleware' => 'web'], function () {
    Route::get('/dashboard', function () {
        return Auth::user();
    });
    Route::post('/user/login', [UserApiController::class, 'login']);
});

// Post Route
Route::get('/post/{id}', [PostApiController::class, 'show']);
