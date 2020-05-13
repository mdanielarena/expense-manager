<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Expense Manager | Login</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">

    <link rel="stylesheet" href="{{ mix('/css/assets_css.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="img/favicon.ico">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  </head>
  <body>
    <div class="page login-page">
        <div class="container">
            <div class="form-outer text-center d-flex align-items-center">
                <div class="form-inner">
                    <div class="logo text-uppercase"><strong class="text-primary">Sign Up</strong></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <form class="text-left form-validate" action="sign-up" method="post">
                        @csrf
                        <div class="form-group-material">
                            <input id="register-username" type="text" name="username" required data-msg="Please enter your username" class="input-material">
                            <label for="register-username" class="label-material">Username</label>
                        </div>
                        <div class="form-group-material">
                            <input id="register-email" type="email" name="email" required data-msg="Please enter a valid email address" class="input-material">
                            <label for="register-email" class="label-material">Email Address</label>
                        </div>
                        <div class="form-group-material">
                            <input id="register-password" type="password" name="password" required data-msg="Please enter your password" class="input-material">
                            <label for="register-password" class="label-material">Password</label>
                        </div>
                        <div class="form-group">
                        <label for="sel1">Select Role:</label>
                        <select class="form-control" name="role">
                            @foreach($roles as $role)
                                <option value="{{$role->id}}">{{$role->name}}</option>
                            @endforeach
                        </select>
                        </div>
                        <div class="form-group text-center">
                            <input id="register" type="submit" value="Register" class="btn btn-primary">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
   <script src="{{ mix('/js/assets_js.js') }}"></script>
  </body>
</html>