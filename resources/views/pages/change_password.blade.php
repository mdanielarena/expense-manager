
@extends('layouts.master')

@section('scripts')
    <!-- <script src="{{ mix('/js/expense.js') }}"></script> -->
@endSection

@section('content')

    @include('layouts.breadcrumb')    
    <div class="col-lg-6">
        <div class="card">
            <div class="card-header d-flex align-items-center">
                <h4>{{$path2}}</h4>
            </div>
            <div class="card-body">

                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <p>{{ $error }}</p>
                            @endforeach
                        </ul>
                    </div>
                @endif
                
                <form class="text-left form-validate" action='/user-change-password' method='post'>
                    @csrf
                    <div class="form-group-material">
                        <input type="password" name="password" required data-msg="Please enter new password" class="input-material">
                        <label class="label-material">New Password</label>
                    </div>
                    <div class="form-group-material">
                        <input type="password" name="password_confirmation" required data-msg="Please enter confirm password" class="input-material">
                        <label class="label-material">Confirm Password</label>
                    </div>
                    <div class="form-group text-center">
                        <input type="submit" value="Submit" class="btn btn-primary">
                    </div>
                </form>

            </div>
        </div>
    </div>
    
@endSection

