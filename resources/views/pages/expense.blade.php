
@extends('layouts.master')

@section('scripts')
    <script src="{{ mix('/js/expense.js') }}"></script>
@endSection

@section('content')

    @include('layouts.breadcrumb')    
    <div class="card">
        <div class="card-header"><h4>{{$path2}}</h4></div>
        <div class="card-body">
            <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Expense Category</th>
                    <th>Amount</th>
                    <th>Entry Date</th>
                    <th>Created At</th>
                </tr>
                </thead>
                <tbody>
                
                @foreach($value as $value)
                    <tr onClick="updateExpense(<?=$value->id?>,'<?=$value->amount?>','<?=$value->entry_date?>','<?=$ec?>')">
                        <td>{{$value->name}}</td>
                        <td>${{$value->amount}}</td>
                        <td>{{$value->entry_date}}</td>
                        <td>{{$value->created_at}}</td>
                    </tr>
                @endforeach

                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick="ExpenseAdd('<?=$ec?>')">Add Category</button>
    </div>
    
@endSection

