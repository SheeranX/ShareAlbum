(function(app){
    'use strict';
    app.directive('appHeadbar', appHeadbar);
    function appHeadbar() {
        return {
            restrcit: 'A',
            replace: true,
            templateUrl: 'view/directive/headBar.html',
            scope:{
                text:'@'
            },
            link:function(scope){
                scope.back = function(){
                    window.history.back();
                }
            }
        }
    }
})(angular.module('app'));