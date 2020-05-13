<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;

class Expense extends Controller
{
    protected $_global;

    public function __construct() {
        $this->_global = new Controller;
    }

    public function index() {

        $expense = DB::table('expense')
            ->select('expense.id','expense.user_id','expense.ec_id','expense.amount','expense.entry_date','expense.created_at','expense_categories.name')
            ->leftJoin('expense_categories', 'expense.ec_id', '=', 'expense_categories.id')
            ->where('expense.user_id',Auth::user()->id)
            ->get();
        
        return view('pages.expense',[
            'data' => $this->_global->getAuthData(),
            'path1'=>'Expense Management',
            'path2'=>'Expense',
            'value'=> $expense,
            'ec' => base64_encode(json_encode(\App\Models\ExpenseCategories::all())),
        ]);

    }

    public function update(Request $request) {
        
        $expense = \App\Models\Expense::find($request->input('id'));                
        $expense->amount = $request->input('amount');
        $expense->entry_date = $request->input('entry_date');
        $expense->save();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function store(Request $request) {

        \App\Models\Expense::create([
            'user_id' => Auth::user()->id,
            'ec_id'=> $request->input('ec'),
            'amount'=> $request->input('amount'),
            'entry_date'=> $request->input('entry_date'),
        ]);

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }

    public function delete(Request $request) {
        
        $expense = \App\Models\Expense::find($request->input('id'));
        $expense->delete();

        return response()->json(base64_encode(json_encode(['succ'=>1])));
    }
}
