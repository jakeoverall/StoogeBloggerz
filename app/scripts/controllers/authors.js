'use strict';

/**
 * @ngdoc function
 * @name stoogebloggerzApp.controller:AuthorsCtrl
 * @description
 * # AuthorsCtrl
 * Controller of the stoogebloggerzApp
 */
angular.module('stoogebloggerzApp')
  .controller('AuthorsCtrl', function ($scope, authors) {
      $scope.authorsList = authors;

      $scope.filterAuthor = '';
      $scope.changeAuth = function (author) {
          return $scope.filterAuthor = author;
      };
      $scope.clearFilter = function() {
          return $scope.filterAuthor = '';
      };
  });

