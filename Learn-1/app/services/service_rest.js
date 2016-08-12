angular.module("myapp.service_rest",[]);
angular.module("myapp.service_rest").factory("Api", ['$http', function($http){
    var obj = {};

    obj.getApiData = function(){
        return $http.get('http://jsonplaceholder.typicode.com/posts');
    }

    return obj;

}]);
