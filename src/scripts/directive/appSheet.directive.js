(function(app){
    'use strict';
    app.directive('appSheet',appSheet);

    function appSheet(){
        return {
            restrict:'A',
            replace:true,
            scope:{
                sheet:'=',
                visible:'=',
                select:'&'
            },
            templateUrl:'view/directive/sheet.html',
            link:function(scope){
                scope.sheetClick = function(){
                    scope.visible = false;
                }
                scope.visibleclk = function(){
                    scope.visible = false;
                }
            }
        }
    }
})(angular.module('app'));