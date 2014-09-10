'use strict';

/**
 * @ngdoc function
 * @name quizzApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizzApp
 */
angular.module('quizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
