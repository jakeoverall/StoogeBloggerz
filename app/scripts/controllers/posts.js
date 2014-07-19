'use strict';

/**
 * @ngdoc function
 * @name stoogebloggerzApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the stoogebloggerzApp
 */
angular.module('stoogebloggerzApp')
  .controller('PostsCtrl', function ($scope, posts) {
      $scope.Posts = posts.getPosts();
  });
