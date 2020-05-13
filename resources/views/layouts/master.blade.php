<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Expense Manager</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">

    <link rel="stylesheet" href="{{ mix('/css/assets_css.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @yield('styles')
    <title>Let's Travel</title>
    <script type='text/javascript'>
        const url   = '<?php echo url("/")?>';
        const token = document.getElementsByTagName("meta")["csrf-token"].getAttribute("content");
    </script>

    <link rel="shortcut icon" href="img/favicon.ico">
    
  </head>
  <body>
    
    @include('layouts.nav')

    <div class="page">
      
      @include('layouts.header')
        
        @yield('content')

      @include('layouts.footer')
      
    </div>
    <script src="{{ mix('/js/assets_js.js') }}"></script>
    @yield('scripts')
  </body>
</html>