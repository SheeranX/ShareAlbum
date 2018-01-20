(function(app){
    'use strict';
    app.directive('appCatalog',appCatalog);

    function appCatalog(){
        return{
            restrict:'A',
            replace:true,
            templateUrl:'view/directive/catalog.html',
            link:function(scope,element,attrs){
                scope.showPosition = function(index){
                   scope.positionList = scope.com.positionClass[index].positionList;
                   scope.isActive = index;
                }
            }
        }
    }
})(angular.module('app'));