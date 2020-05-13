<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckRole;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login','Auth\Login@index')->name('login');
Route::get('/log-out','Auth\Login@signOut');
Route::post('/authenticate','Auth\Login@store');
Route::get('/','DashBoard@index')->middleware('auth');

//to create first user which is admin, it may disable
Route::get('/sign-up','Auth\SignUp@index');
Route::post('/sign-up','Auth\SignUp@store');


Route::middleware([CheckRole::class])->group(function () {
    
    //roles
    Route::get('/roles','Roles@index');
    Route::post('/role-update','Roles@update');
    Route::post('/role-add','Roles@store');
    Route::post('/role-delete','Roles@delete');

    //users
    Route::get('/users','Users@index');
    Route::post('/user-update','Users@update');
    Route::post('/user-add','Users@store');
    Route::post('/user-delete','Users@delete');
    
    //expense-categories
    Route::get('/expense-categories','ExpenseCategories@index');
    Route::post('/expense-categories-update','ExpenseCategories@update');
    Route::post('/expense-categories-add','ExpenseCategories@store');
    Route::post('/expense-categories-delete','ExpenseCategories@delete');
    
});

Route::get('/user-change-password','Users@changePassword');
Route::post('/user-change-password','Users@changePasswordPost');

//expense
Route::get('/expense','Expense@index');
Route::post('/expense-update','Expense@update');
Route::post('/expense-add','Expense@store');
Route::post('/expense-delete','Expense@delete');

Route::get('/fetch-expenses','Dashboard@fetchExpenses');



