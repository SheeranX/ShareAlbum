(function(app){
    'use strict';
    app.controller('positionCtrl',positionCtrl);

    positionCtrl.$inject = ['$scope','$http','$state','$q','cache'];

    function positionCtrl($scope,$http,$state,$q,cache){

        $scope.isLogin =false;

        cache.put('name','sheeran');

        var promise = function (){
             var def = $q.defer();
             return  $http.get('/data/position.json?id='+$state.params.id);
             
        }
        var company = function(id){
            return $http.get('/data/company.json?id='+id);
        }
        promise().then(function(resp){
            $scope.pos = resp.data;
            company(resp.companyId).then(function(res){
                $scope.com = res.data;
            });
        },function(err){
            console.log(err);
        });
    }
})(angular.module('app'));