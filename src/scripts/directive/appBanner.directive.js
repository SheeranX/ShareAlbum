(function(app){
    'use strict';
    app.directive('appBanner',appBanner);
    function appBanner(){
        return{
            restrict:'A',
            templateUrl:'/view/directive/banner.html',
            replace:true,
            scope:{
                data:"=",
                filterObj:'=',
                filterName:'='
            }
        }
    }
})(angular.module('app'));