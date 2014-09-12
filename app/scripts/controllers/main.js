'use strict';

/**
 * @ngdoc function
 * @name quizzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizzApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.score = 0;

    $scope.quiz = [
        {
          "q": "Who is the best ping pong player at FSA?",
          'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
          'answer': "Nimit",
          'difficulty': 45
        },
        { "q": "Which robot name was chanted during Lego Mindstorms?",
          'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
          'answer':'noHope.js',
          'difficulty': 25
        },
        {
          'q': "Out of the following frontend frameworks, which framework is most rails-like",
          'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
          'answer':'Ember.js',
          'difficulty': 19
        },
        {
          'q': "Which project used a local data store?",
          'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
          'answer':'Twitter.js',
          'difficulty': 8
        }
      ];

    $scope.checkAnswer = function(){

    };
  });
