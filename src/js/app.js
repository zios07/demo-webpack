require('../css/style.css')
require('angular')
require('jquery')
require('bootstrap/dist/css/bootstrap.min.css')

angular.module('app', [])
    .controller('Controller', function($scope){

        $scope.id = "99";
        $scope.className = "Class 1";
        $scope.applicationName = "Service 1";
        $scope.mode = "write";
        $scope.criteria = "";

        $scope.sayhi = function(){
            alert('Hello there!');
        }

        $scope.name = "Zakaria";
    })