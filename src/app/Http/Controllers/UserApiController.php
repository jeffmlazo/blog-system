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
    // public function store(User $user)
    {
        // $data = json_decode($request->payload, true);

        // $rules = [
        //     'first_name' => 'required',
        //     'middle_name' => 'required',
        //     'last_name' => 'required',
        //     'username' => 'required',
        //     'password' => 'required',
        //     'user_type' => 'required',
        //     'email_addres' => 'required',
        //     'mobile' => 'max:15',
        // ];

        // $validator = Validator::make($data, $rules);
        // if ($validator->passes()) {
        //     return [
        //         'success' => true
        //     ];
        // } else {
        //     dd($validator->errors()->all());
        // }
        // $validated = $user->validate([
        //     'first_name' => 'required',
        //     'middle_name' => 'required',
        //     'last_name' => 'required',
        //     'username' => 'required',
        //     'password' => 'required',
        //     'user_type' => 'required',
        //     'email_addres' => 'required',
        //     'mobile' => 'max:15|integer',
        // ]);

        // return User::create([
        //     'first_name' => request('first_name'),
        //     'middle_name' => request('middle_name'),
        //     'last_name' => request('last_name'),
        //     'username' => request('username'),
        //     'password' => request('password'),
        //     'user_type' => request('user_type'),
        //     'email_address' => request('email_address'),
        //     'mobile' => request('mobile'),
        // ]);


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
            return response()->json($errors->all(), 500);
        } else {
            // $user = new User();
            // $user->first_name = request('first_name');
            // $user->middle_name = request('middle_name');
            // $user->last_name = request('last_name');
            // $user->username = request('username');
            // $user->password = request('password');
            // $user->user_type = request('user_type');
            // $user->email_address = request('email_address');
            // $user->mobile = request('mobile');
            // $user->save();

            return User::create([
                'first_name' => request('firstName'),
                'middle_name' => request('middleName'),
                'last_name' => request('lastName'),
                'username' => request('username'),
                'password' => Hash::make(request('password')),
                'user_type' => request('userType'),
                'email_address' => request('emailAddress'),
                'mobile' => request('mobile'),
            ]);

            // return [
            //     'success' => true
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
