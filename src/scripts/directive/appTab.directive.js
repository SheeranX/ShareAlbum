(function(app){
    'use strict';

    app.directive('appTab',appTab);

    function appTab(){
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/directive/tab.html',
            scope:{
                list :'=',
                tabClick : '&'
            },
            link:function(scope){
                scope.click = function(tab){
                    scope.selectedId = tab.id;
                    scope.tabClick(tab);  
                }
            }
        }
    }
})(angular.module('app'));