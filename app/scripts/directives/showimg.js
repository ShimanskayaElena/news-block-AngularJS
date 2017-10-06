'use strict';

/**
 * @ngdoc directive
 * @name syberryAngularJsApp.directive:showImg
 * @description
 * # showImg
 */
angular.module('syberryAngularJsApp')
  .directive('showImg', function () { /*$log*/
    return {
      scope: {
        nameImg: '=nameimg'
      },
      restrict: 'A',
      link: function postLink(scope, element) { /*attrs*/
        //$log.log(element[0]);
        element.on('change', function () { /*event*/ 
          scope.$apply(function () {
            // извлекаем массив загруженных файлов
            var inputFile = element[0].files,
                file = inputFile[0],
                fileName = file.name,
                fileSize = file.size;
            
            if (fileSize <= 100000) {
              scope.nameImg = fileName; 
            } else {
              scope.nameImg = ''; 
            }
          });
        });
      }
    };
  });
