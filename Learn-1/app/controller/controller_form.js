angular.module("myapp.controller_form", [])
angular.module("myapp.controller_form").controller('FormController', ['$scope','Api', function($scope, Api){
    $scope.favMeat = 'Hamburguer';
    $scope.posts;

    getPosts();
    function getPosts(){
        Api.getApiData()
            .then(function (response){
                $scope.posts = response.data;
                console.log(response.data);
            },function(error){
                $scope.status = 'Unable to load data '+ error.message;
            });
    }

}]);
