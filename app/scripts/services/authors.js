'use strict';

/**
 * @ngdoc service
 * @name stoogebloggerzApp.authors
 * @description
 * # authors
 * Service in the stoogebloggerzApp.
 */
angular.module('stoogebloggerzApp')
  .service('authors', function authors() {
      return ['Larry', 'Curly', 'Moe'];
  });
