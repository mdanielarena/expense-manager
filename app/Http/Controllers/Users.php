<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\MyTrait;
use DB;
use Auth;

class Users extends Controller
{
    protected $_global;

    public function __construct() {
        $this->_global = new Controller;
    }

    public function index() {

        $users = DB::table('users')
            ->select('users.id','users.username','users.email','users.role_id','roles.name','roles.description')
            ->leftJoin('roles', 'users.role_id', '=', 'roles.id')
            ->get();

        return view('pages.users',[
            'data' => $this->_global->getAuthData(),
            'path1'=>'User Management',
            'path2'=>'Users',
            'value'=> $users,
            'roles'=> base64_encode(json_encode(\App\Models\Roles::all()))
        ]);

    }

    public function update(Request $request) {
        
        $user = \App\Models\Users::find($request->input('id'));                
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->role_id = $request->input('role');
        $user->save();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function store(Request $request) {

        \App\Models\Users::create([
            'username'=> $request->input('username'),
            'email'=> $request->input('email'),
            'role_id'=> $request->input('role'),
            'password'=> bcrypt($request->input('password')),
        ]);

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function delete(Request $request) {
        
        $role = \App\Models\Users::find($request->input('id'));
        $role->delete();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function changePassword() {
        
        return view('pages.change_password',[
            'data' => $this->_global->getAuthData(),
            'path1'=>'User Management',
            'path2'=>'Change Password',
        ]);
    }

    public function changePasswordPost(Request $request) {
        

        $validatedData = $request->validate([
            'password' => 'required|required_with:password_confirmation|string|confirmed',
            'password_confirmation'=>'sometimes|required_with:password',
            
        ]);
    
        $user = \App\Models\Users::find(Auth::user()->id);                
        $user->password = bcrypt($request->input('password'));
        $user->save();

        Auth::logout();
        return redirect('/login');

    }

}
