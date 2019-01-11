<!DOCTYPE html>
<html lang="en" ng-app="myApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    </head>
<body> 
    <div ng-view></div>
    <p>Angular App</p>
        <!-- ANGULAR -->
        <!-- all angular resources will be loaded from the /public folder -->
        <script src="{{ asset ('node_modules/angular-route/angular-route.min.js') }}"></script>
        <script src="{{ asset ('node_modules/angular/angular.min.js') }}"></script>
        <script src="{{ asset ('node_modules/angular-cookies/angular-cookies.min.js') }}"></script>
        <script src="{{ asset ('js/app.js') }}"></script>
        <script src="{{ asset ('js/controllers.js') }}"></script>
</body> 
</html>
