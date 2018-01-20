(function(app){
    'use strict';
    app.directive('appCompany',appCompany);

    function appCompany(){
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/directive/companyDetails.html',
            scope:{
                com:'='
            }
        }
    }
})(angular.module("app"));