(function(app){
    
    "use strict";

    app.service('cache',cache);
    
    cache.$inject = ['$cookies'];
    
    function cache ($cookies){
        this.put = function(key,value){
            $cookies.put(key,value);
        };
        this.get = function(key){
            return $cookies.get(key);
        };
        this.remove = function(key){
            $cookies.remove(key);
        }
    }

})(angular.module('app'));