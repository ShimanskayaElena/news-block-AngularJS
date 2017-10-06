'use strict';

/**
 * @ngdoc function
 * @name syberryAngularJsApp.controller:ManagementCtrl
 * @description
 * # ManagementCtrl
 * Controller of the syberryAngularJsApp
 */
angular.module('syberryAngularJsApp')
  .controller('ManagementCtrl', function ($scope, $location, $window) {
  
    $scope.showButton = true; /*добавляем кнопки для редактирования*/
  
    $scope.addNews = function () {
      $location.path('/editing').search('id', 0);
    };
  
    $scope.editingNews = function (article) {
      $location.path('/editing').search('id', article.id);
    };
  
    $scope.deleteNews = function (article) {
      var removalNews = $window.confirm('Are you sure you want to remove the news?');
      if (removalNews) {
        article.$delete().then(function () {
          $scope.articles.splice($scope.articles.indexOf(article), 1);
        });
      }
    };
  });