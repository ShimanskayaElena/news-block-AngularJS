'use strict';

/**
 * @ngdoc directive
 * @name syberryAngularJsApp.directive:searchArticles
 * @description
 * # searchArticles
 */
angular.module('syberryAngularJsApp')
  .directive('searchArticles', function () {
    return {
      scope: {
        article: '=article'
      },
      restrict: 'A',
      link: function postLink(scope, element) { /*$log, attrs*/
        
        element.on('click', function (event) {
          scope.$apply(function () {
            scope.article = event.target.id;
            //$log.log('scope.article = ' + scope.article);
          }); 
        });
      }
    };
  });
