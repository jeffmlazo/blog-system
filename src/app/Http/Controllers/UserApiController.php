<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class UserApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return "Test Create";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required',
            'middleName' => 'required',
            'lastName' => 'required',
            'username' => 'required',
            'password' => 'required',
            'userType' => 'required',
            'emailAddress' => 'required',
            'mobile' => 'numeric',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['status' => 'error', 'message' => $errors->all()], 500);
        } else {
            User::create([
                'first_name' => request('firstName'),
                'middle_name' => request('middleName'),
                'last_name' => request('lastName'),
                'username' => request('username'),
                'password' => Hash::make(request('password')),
                'user_type' => request('userType'),
                'email_address' => request('emailAddress'),
                'mobile' => request('mobile'),
            ]);

            return response()->json(['status' => 'success', 'message' => 'You have successfully registered!'], 201);
        }
    }

    /**
     * Handle an authentication attempt.
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['status' => 'error', 'message' => $errors->all()], 500);
        } else {
            // // Check Username
            // $user = User::where('username', request('username'))->first();

            // // Check password
            // if (!$user || !Hash::check(request("password"), $user->password)) {

            //     return response()->json(['status' => 'error', 'message' => 'Invalid username or password.'], 401);
            // }

            // return response()->json(['status' => 'success', 'message' => $user], 200);
            $credentials = [
                'username' => $request->username,
                'password' => $request->password,
            ];

            if (Auth::attempt($credentials)) {
                Auth::login(Auth::user());
                $user = Auth::user();

                // $request->session()->regenerate();

                return response()->json(['status' => 'success', 'message' => 'User was successfully logged in.', 'userData' => $user], 200);

                // return redirect()->intended('dashboard');
            }

            return response()->json(['status' => 'error', 'message' => 'Invalid username or password.'], 401);

            // return back()->withErrors([
            //     'username' => 'Invalid username or password.',
            // ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        Cache::flush();
        $request->session()->flush();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
