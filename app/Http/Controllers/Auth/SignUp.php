<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Roles;
use App\Models\Users;
use Session;

class SignUp extends Controller
{
    public function index() {

        if(Roles::all()->isEmpty()) {
            Session::flash('message','kindly, insert roles data directly in the db');
        }
        
        return view('auth.signup')->with(['roles'=> Roles::all()]);
    }

    public function store(Request $request){

        Users::create([
            'username'=> $request->input('username'),
            'email'=> $request->input('email'),
            'password'=> bcrypt($request->input('password')),
            'role_id'=> $request->input('role'),
        ]);

        return redirect('/sign-up');

    }
}
