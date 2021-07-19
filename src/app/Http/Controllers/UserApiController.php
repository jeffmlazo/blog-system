<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();;
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
            'mobile' => 'integer',
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

            return [
                'status' => 'success',
                'message' => 'You have successfully registered!'
            ];
        }
    }

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
            // Check Username
            $user = User::where('username', request('username'))->first();

            // Check password
            if (!$user || !Hash::check(request("password"), $user->password)) {
                return response([
                    'status' => 'error',
                    'message' => 'Invalid username or password.'
                ], 401);
            }

            // $token = $user->createToken('myapptoken')->plainTextToken;

            $response = [
                'status' => 'success',
                'message' => $user,
                // 'token' => $token
                // 'token' => 'raaldkjaljdaljjadl3'
            ];

            return response($response, 201);

            // User::create([
            //     'username' => request('username'),
            //     'password' => Hash::make(request('password')),
            // ]);

            // return [
            //     'status' => 'success',
            //     'message' => 'You have successfully registered!'
            // ];
        }
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
