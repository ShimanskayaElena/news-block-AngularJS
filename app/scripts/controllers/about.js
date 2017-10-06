'use strict';

/**
 * @ngdoc function
 * @name syberryAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the syberryAngularJsApp
 */
angular.module('syberryAngularJsApp')
  .controller('AboutCtrl', function ($scope, $location) {
    //извлекаем данные о выбранной статье
    $scope.data = $location.search();
    //get-запрос к серверу
    $scope.article = $scope.newsResource.get({id: $scope.data.id});
   // $scope.img = $scope.imagesResource.get({id: $scope.data.id});
    
    //вернуться к списку новостей
    $scope.getHome = function () {
      $location.path('/');
    };
  });