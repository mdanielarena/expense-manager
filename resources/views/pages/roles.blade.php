
@extends('layouts.master')

@section('scripts')
    <script src="{{ mix('/js/roles.js') }}"></script>
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
                    <th>Display Name</th>
                    <th>Description</th>
                    <th>Created At</th>
                </tr>
                </thead>
                <tbody>
                
                @foreach($value as $value)

                @if($value->id !== 1)
                    <tr onClick="updateRole(<?=$value->id?>,'<?=$value->name?>','<?=$value->description?>')">
                @endif
                        <td>{{$value->name}}</td>
                        <td>{{$value->description}}</td>
                        <td>{{$value->created_at}}</td>
                    </tr>
                @endforeach

                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick="roleAdd()">Add Role</button>
    </div>
    
@endSection

