<?php

namespace App\Http\Controllers;

use App\Models\DashboardApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class DashboardApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $userData = [
                'id' => Auth::id(),
                'username' => Auth::user()->username,
                'user_type' => Auth::user()->user_type
            ];

            return view('dashboard', $userData);
        } else {
            return redirect()->intended('/');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DashboardApi  $dashboardApi
     * @return \Illuminate\Http\Response
     */
    public function show(DashboardApi $dashboardApi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DashboardApi  $dashboardApi
     * @return \Illuminate\Http\Response
     */
    public function edit(DashboardApi $dashboardApi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DashboardApi  $dashboardApi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DashboardApi $dashboardApi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DashboardApi  $dashboardApi
     * @return \Illuminate\Http\Response
     */
    public function destroy(DashboardApi $dashboardApi)
    {
        //
    }
}
