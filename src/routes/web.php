<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostApiController;

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
});


// POST Route
Route::get('/post/{id}', [PostApiController::class, 'show']);
