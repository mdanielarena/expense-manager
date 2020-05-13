<?php

namespace App\Http\Controllers;

use Auth;
use DB;
use App\Models\Roles;

trait MyTrait {

    public function getAuthData() {
        
        if(Auth::check()) {

            $user_id = Auth::user()->id;
            $role = Roles::where('id',Auth::user()->role_id)->first();
            
            $data = array(
               'user_id'=> Auth::user()->id,
               'email'=> Auth::user()->email,
               'role'=> $role->name,
               'role_id'=> Auth::user()->role_id,
            );
    
            return $data;
        }
    }

}

