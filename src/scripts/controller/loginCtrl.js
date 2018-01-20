(function(app){
    'use strict';
    app.controller('loginCtrl',loginCtrl);

    loginCtrl.$inject = ['$scope','$http','$location','$rootScope','cache'];

    function loginCtrl($scope,$http,$location,$rootScope,cache){
        $scope.login = function(){
            $http.get('/data/login.json').then(function(resp){
                if(resp.data.name==$scope.username&&resp.data.password==$scope.password)
                {
                    cache.put(resp.data.name);
                    console.log(resp.data.name);    
                    $location.path('/personal');
                }
            });
        }
        $scope.goLogin = function(){
            $scope.name = true;
        }
    }
})(angular.module('app'));