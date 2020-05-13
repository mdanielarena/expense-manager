<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Flash;
use Auth;

class Login extends Controller
{

    public function index() {
        return view('auth.login');
    }

    public function store(Request $request) {

        $this->validate($request, [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        
        $path = '';
        if (Auth::attempt(['username' => $request->input('username'), 'password' => $request->input('password')])) {

            $request->session()->regenerate();
            $path = '/';

        } else {

            Session::flash('message','Invalid credentials');
            $path = '/login';

        }
            return redirect($path);
    }

    public function signOut(Request $request) {

        Auth::logout();
        return redirect('/login');
    }
}
