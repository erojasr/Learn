var app = angular.module("myapp", [
    'myapp.service_rest',
    'myapp.controller_form'
]);

app.config(['$routeProvider',function($routeProvider){

    var viewBase = 'app/views/';

    $routeProvider
        .when('/',{
            controller:'FormController',
            templateUrl: viewBase + 'index.html'
        })
        .when('/posts',{
            controller:'FormController',
            templateUrl: viewBase + 'posts.html'
        });

}]);
