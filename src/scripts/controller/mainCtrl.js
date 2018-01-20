(function(app){
    'use strict';
    app.controller('mainCtrl',mainCtrl);
    mainCtrl.$inject = ['$scope','$http'];
    function mainCtrl($scope,$http){
      $http.get('/data/positionList.json').then(function(resp){
            $scope.list = resp.data;
      });
    }
})(angular.module('app'));  