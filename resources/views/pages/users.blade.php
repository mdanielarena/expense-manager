
@extends('layouts.master')

@section('scripts')
    <script src="{{ mix('/js/users.js') }}"></script>
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
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                
                @foreach($value as $value)

                @if($value->id !== 1)
                    <tr onClick="updateUser(<?=$value->id?>,'<?=$value->username?>','<?=$value->email?>','<?=$roles?>')">
                @endif
                        <td>{{$value->username}}</td>
                        <td>{{$value->email}}</td>
                        <td>{{$value->name}}</td>
                    </tr>
                @endforeach

                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick="userAdd('<?=$roles?>')">Add User</button>
    </div>
    
@endSection

