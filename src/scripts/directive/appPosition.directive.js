(function(app){
    'use strict';
    app.directive('appPosition',appPosition);
    function appPosition(){
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/directive/positionDetails.html',
            scope:{
                isLogin:'=',
                pos:'='
            }
        }
    }
})(angular.module('app'));