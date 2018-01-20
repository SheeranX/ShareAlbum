(function(app){
    'use strict';
    app.directive('appFooter',appFooter);
    function appFooter(){
        return {
            restrict:'A',
            replace:true,
            templateUrl:'/view/directive/footer.html'
        }
    }
})(angular.module('app'));