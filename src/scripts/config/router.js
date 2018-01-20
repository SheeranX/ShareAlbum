(function(app){
    'use strict';

     app.config(config).run(run);

     config.$inject = ['$stateProvider','$urlRouterProvider'];
     run.$inject = ['$location','$rootScope','cache'];

     function config($stateProvider,$urlRouterProvider){
            $stateProvider.state('main',{
                url:'/main',
                templateUrl:'view/main.html',
                controller:'mainCtrl'
            }).state('position',{
                url:'/position/:id',
                templateUrl:'view/position.html',
                controller:'positionCtrl'
            }).state('company',{
                url:'/company/:id',
                templateUrl:'view/company.html',
                controller:'companyCtrl'
            }).state('search',{
                url:'/search',
                templateUrl:'view/search.html',
                controller:'searchCtrl'
            }).state('login',{
                url:'/login',
                templateUrl:'view/login.html',
                controller:'loginCtrl'
            }).state('register',{
                url:'/register',
                templateUrl:'view/register.html',
                controller:'registerCtrl'
            }).state('personal',{
                url:'/personal',
                templateUrl:'view/personal.html',
                controller:'personalCtrl'
            }).state('collection',{
                url:'/collection',
                templateUrl:'view/collection.html',
                controller:'collectionCtrl'
            });
            $urlRouterProvider.otherwise('main');
     }

     function run($location,$rootScope,cache){
        if(cache.get(name)===undefined){
           $location.path('/login');
          // console.log(cache.get(name));
        }
     }
})(angular.module('app'));