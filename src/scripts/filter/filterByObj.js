(function(app){
    'use strict';
    app.filter('filterByObj',filterByObj);
    
    function filterByObj(){
        return function(list,obj){
            var result = [];
            angular.forEach(list,function(item){
                var isEqual = true;
                for(var e in obj){
                    if(item[e].indexOf(obj[e])<0)//判断是否包含某个关键字
                    {
                        isEqual = false;
                    }
                }
                if(isEqual){    
                    result.push(item);
                }
            });
            return result;
        }
    }
})(angular.module('app'));