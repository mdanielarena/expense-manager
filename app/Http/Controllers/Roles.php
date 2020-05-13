<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\MyTrait;

class Roles extends Controller
{

    protected $_global;

    public function __construct() {
        $this->_global = new Controller;
    }

    public function index() {
        
        $roles = \App\Models\Roles::all();

        return view('pages.roles',[
            'data' => $this->_global->getAuthData(),
            'path1'=>'User Management',
            'path2'=>'Roles',
            'value'=> $roles,
        ]);
    }

    public function update(Request $request) {

        $role = \App\Models\Roles::find($request->input('id'));
        $role->name = $request->input('name');
        $role->description = $request->input('description');
        $role->save();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function store(Request $request) {

        \App\Models\Roles::create([
            'name'=> $request->input('name'),
            'description'=> $request->input('description'),
        ]);

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function delete(Request $request) {
        
        $role = \App\Models\Roles::find($request->input('id'));
        $role->delete();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }
}
