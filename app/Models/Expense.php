<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $table = 'expense';
    protected $fillable = ['user_id','ec_id','amount','entry_date'];
}
