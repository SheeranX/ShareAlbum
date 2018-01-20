(function(app){
    'use strict';
    app.directive('appHeader',appHeader);
  //  appHeader.$inject = [''];
    function appHeader(){
        return {
            restrict:'A',
            templateUrl:'/view/directive/header.html',
            replace:true
        }
    }
})(angular.module('app'));