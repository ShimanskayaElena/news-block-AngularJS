'use strict';

/**
 * @ngdoc function
 * @name syberryAngularJsApp.controller:EditingCtrl
 * @description
 * # EditingCtrl
 * Controller of the syberryAngularJsApp
 */
angular.module('syberryAngularJsApp')
  .controller('EditingCtrl', function ($scope, $location) { /*$log*/

    // все поля формы должны быть заполнены
    $scope.requireValue = true;

    //извлекаем id статьи, которую надо редактировать
    $scope.data = $location.search();
    
    if ($scope.data.id !== 0) {
      //get-запрос к серверу
      $scope.currentArticle = $scope.newsResource.get({id: $scope.data.id});
      //$scope.img = $scope.imagesResource.get({id: $scope.data.id});

    } else {
      $scope.currentArticle = {};
    }
    
    /*предварительная валидация формы в процессе ввода данных*/
    $scope.getError = function (error) {
      if (angular.isDefined(error)) {
        if (error.required) {
          return 'Field must not be empty!';
        }
        if (error.pattern) {
          return 'It is allowed to use only letters';
        }
      }
    };

    $scope.editOrDeleteImage = function (article) {
      article.image = null;
      $scope.$watch('currentArticle.image', function() {
        angular.element('.thumb').attr('src', '');
      });
    };
      
    $scope.saveOrEdit = function (article) {
       
      if (angular.isDefined(article.id)) { 
        
        //pедактирование уже существующей записи
        article.$save().then(function (newArticle) { // PUT - запрос на сервер
        //article.$update().then(function (newArticle) {

          for (var i = 0; i < $scope.articles.length; i++) {
            if ($scope.articles[i].id === newArticle.id) {
              $scope.articles[i] = newArticle;
              $location.path('/management');
              break;
            }
          }
       });
      } else { 
         //создание новой записи
         new $scope.newsResource(article).$save().then(function (newArticle) {
          $scope.articles.push(newArticle);
          $location.path('/management');
        });
      } 
      //end if
    };
    
    $scope.cancelEdit = function () {
      $scope.currentArticle = {};
      $location.path('/management');
    };
  });