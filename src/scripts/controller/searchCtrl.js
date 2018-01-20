(function(app){
    'use strict';
    app.controller('searchCtrl',searchCtrl);

    searchCtrl.$inject = ['$scope','$http','dict'];

    function searchCtrl($scope,$http,dict){

        $scope.searchVal = "";
        $scope.sheet = {};
        $scope.filterObj={};
        $scope.filterName = {};
        var tabId = '';

        $http.get('/data/positionList.json')
        .then(function(resp){
            $scope.list = resp.data;
        });


        $scope.tabList = [{id:'city',name:'City'},{id:'salary',name:'Salary'},{id:'scale',name:'Large'}];

        $scope.tClick = function(id,name){//控制器方法与指令方法的连接  
            tabId = id;
            $scope.sheet.list = dict[id].data;//get the value from global varible which defined by Value service
            $scope.sheet.visible = true;
        }

        $scope.searchClick = function(){
                $scope.filterName = {companyName: $scope.searchVal};
        }
        //sheet modal click 
        $scope.sheetSelect = function(id,name){
            if(id){
                angular.forEach($scope.tabList,function(item){
                    if(item.id===tabId){//设置tab显示值
                        item.name = name; 
                    }
                });
                $scope.filterObj[tabId+'Id'] = id;
            }else
            {
               delete $scope.filterObj[tabId+'Id'];
               angular.forEach($scope.tabList,function(item){
                    if(item.id === tabId){
                        switch(item.id){
                            case 'city':
                            item.name='city';
                            break;
                            case 'salary':
                            item.name = 'salary';
                            break;
                            case 'scale':
                            item.name = 'Large';
                            break;
                        }
                    }
               });
            }
        }
    }
})(angular.module('app'));