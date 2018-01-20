(function(app){
    'use strict';
    app.controller('companyCtrl',companyCtrl);
    companyCtrl.$inject = ['$scope','$http','$q','$state'];
    function companyCtrl($scope,$http,$q,$state){
        var company = function(){
            return $http.get('/data/company.json');
        }
        company().then(function(resp){
            $scope.com = resp.data;
        });
    }
})(angular.module('app'));