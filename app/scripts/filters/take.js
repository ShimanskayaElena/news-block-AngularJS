'use strict';

/**
 * @ngdoc filter
 * @name syberryAngularJsApp.filter:take
 * @function
 * @description
 * # take
 * Filter in the syberryAngularJsApp.
 */
angular.module('syberryAngularJsApp')
  .filter('take', function ($filter) {
    return function (articles, from, count) {
      var arr = articles.slice(from);
      return $filter('limitTo')(arr, count);
    };
  });
/*используется для выборки определённого количества count записей начиная с from*/