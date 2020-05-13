<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExpenseCategories extends Controller
{
    protected $_global;

    public function __construct() {
        $this->_global = new Controller;
    }

    public function index() {

        return view('pages.expense_categories',[
            'data' => $this->_global->getAuthData(),
            'path1'=>'Expense Management',
            'path2'=>'Expense Categories',
            'value'=> \App\Models\ExpenseCategories::all(),
        ]);

    }

    public function update(Request $request) {
        
        $expenseCategories = \App\Models\ExpenseCategories::find($request->input('id'));                
        $expenseCategories->name = $request->input('name');
        $expenseCategories->description = $request->input('description');
        $expenseCategories->save();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function store(Request $request) {

        \App\Models\ExpenseCategories::create([
            'name'=> $request->input('name'),
            'description'=> $request->input('description'),
        ]);

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function delete(Request $request) {
        
        $role = \App\Models\ExpenseCategories::find($request->input('id'));
        $role->delete();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }
}
