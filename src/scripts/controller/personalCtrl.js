(function(app){
    'use strict';
    app.controller('personalCtrl',personalCtrl);

    personalCtrl.$inject = ['$scope','$location','$rootScope','cache'];

    function personalCtrl($scope,$location,$rootScope,cache){
        $scope.logOut = function(){
            cache.remove(name);
            $location.path('/main');
        }
    }
})(angular.module('app'));
