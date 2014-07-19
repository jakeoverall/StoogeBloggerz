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
      this.authors = [{
          'name': 'Larry'
      }, {
          'name': 'Curly'
      }, {
          'name': 'Moe'
      }];

      this.getAuthors = function() {
          return this.authors;
      };
  });
