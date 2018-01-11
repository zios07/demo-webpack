require('../css/style.css')
require('../../bower_components/angular/angular.js');
require('../../bower_components/attachment.directive/attachment.module.js');;
require('../../bower_components/attachment.directive/attachment.config.js');
require('../../bower_components/attachment.directive/attachment.service.js');
require('../../bower_components/attachment.directive/attachment.directive.js');
require('../../bower_components/attachment.directive/style.css');

angular.module('app', [])
    .controller('Controller', function($scope){
        $scope.hello = function(){
            alert('Hello there!');
        }

        $scope.name = "Zakaria";
    })