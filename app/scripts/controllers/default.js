'use strict';

/**
 * @ngdoc function
 * @name syberryAngularJsApp.controller:DefaultCtrl
 * @description
 * # DefaultCtrl
 * Controller of the syberryAngularJsApp
 */
angular.module('syberryAngularJsApp')
   /*.config([ '$resourceProvider', function($resourceProvider) {
       $resourceProvider.defaults.actions.update = { method: 'PUT', params: { id: '@id' }, isArray: false };
   }])*/
  .controller('DefaultCtrl', function ($scope, $rootScope, $location, $resource, baseUrl) { /*$log, baseUrlImg*/
    
    // настраиваем объект для работы с сервером
    $scope.newsResource = $resource(baseUrl + ':id', { id: '@id'});
    //$scope.imagesResource = $resource(baseUrlImg + ':id', { id: '@id'});

    // получение всех данных из модели
    $scope.refresh = function () {
      $scope.articles = $scope.newsResource.query();
    };
  
    // пагинация
    $scope.currentPage = 0; // номер текущей страницы 0
    $scope.pageSize = 10; // количество заголовков статей на одной странице
    // общее количество страниц
    $scope.getNumberOfPages = function () {
      return Math.ceil($scope.articles.length/$scope.pageSize);
    };
  
    $scope.convertToArray = function (number) {
      return new Array(number);
    };
  
    $scope.setCurrentPage = function (pageNumber) {
      $scope.currentPage = pageNumber;
    };
  
    // пока ни одна статья ещё не выбрана
    $scope.data = '';
  
    $scope.$watch('data', function(newValue, oldValue) {
      if(newValue !== oldValue) {
        $scope.data = newValue;
        //$log.log('$scope.data = ' + $scope.data);
        $location.path('/about').search('id', newValue);
      }
    });
  
    $scope.refresh();
  });