<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostApiController;
use App\Http\Controllers\UserApiController;
use App\Http\Controllers\DashboardApiController;
use Illuminate\Support\Facades\Auth;
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

#region PUBLIC ROUTES
Route::get('/', function () {
    if (Auth::check()) {
        $isLoggedIn = [
            'isLoggedIn' => true
        ];

        return view('home', $isLoggedIn);
    } else {
        return view('home');
    }
});

Route::get('/logout', [UserApiController::class, 'logout'])->name('logout');

// Post
Route::get('/post/{id}', [PostApiController::class, 'show']);
#endregion

#region PRIVATE ROUTES
Route::middleware(['web'])->group(function () {
    // Login
    Route::post('/user/login', [UserApiController::class, 'login']);

    // Dashboard
    Route::get('/dashboard', [DashboardApiController::class, 'index']);
});
#endregion