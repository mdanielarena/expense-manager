<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\MyTrait;
use DB;
use Auth;

class DashBoard extends Controller
{

    protected $_global;

    public function __construct() {
        $this->_global = new Controller;
    }

    public function index() {

        return view('pages.dashboard',['data' => $this->_global->getAuthData()]);
    }

    public function fetchExpenses() {
     
        $ec = DB::table('expense_categories')->get();
        $a = 0;
        $value = array();
        foreach($ec as $ec) {

            $total = 0;

            $expense = DB::table('expense')->where('ec_id',$ec->id)->where('expense.user_id',Auth::user()->id)->get();
            if(count($expense)) {
                foreach($expense as $expense) 
                    if($ec->id === $expense->ec_id) $total += $expense->amount;
            }else{
                $total = 0;
            }
                $value[$a]['category'] = $ec->name;
                $value[$a]['amount'] = $total;
                            
            $a++;
        }

        return response()->json(base64_encode(json_encode(['value'=>$value])));
        
    }
    
}
