(function(app){
    'use strict';
    app.value('dict',{})
    .run(['$http','dict',function($http,dict){
        $http.get('data/city.json').then(function(resp){
            dict.city = resp;
        });
        $http.get('data/salary.json').then(function(resp){
            dict.salary = resp;
        });
        $http.get('data/scale.json').then(function(resp){
            dict.scale = resp;
        });
    }]);
})(angular.module('app'));