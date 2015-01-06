'use strict';

/**
 * @ngdoc function
 * @name angularNodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularNodeApp
 */
angular.module('angularNodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
