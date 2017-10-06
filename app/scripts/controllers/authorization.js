'use strict';

/**
 * @ngdoc function
 * @name syberryAngularJsApp.controller:AuthorizationCtrl
 * @description
 * # AuthorizationCtrl
 * Controller of the syberryAngularJsApp
 */
angular.module('syberryAngularJsApp')
  .constant('loginAdmin', 'admin')
  .constant('passwordAdmin', '1111')
  .controller('AuthorizationCtrl', function ($scope, $location, $window, loginAdmin, passwordAdmin) {
   
    $scope.requireValue = true;
    $scope.matchPattern = new RegExp('[a-z]');

    /*предварительная валидация формы в процессе ввода данных пользователем*/
    $scope.getError = function (error) {
      if (angular.isDefined(error)) {
        if (error.required) {
          return 'Field must not be empty! Please enter your login!';
        }
        if (error.minlength) {
          return 'Incorrect login! Login must contain at least 3 characters!';
        }
        if (error.maxlength) {
          return 'Incorrect login! Login should contain no more than 8 characters!';
        }
        if (error.pattern) {
          return 'Login must contain at least one letter of the Latin alphabet!';
        }
      }
    };
  
    $scope.signIn = function (user) {
      if(user.roleAdmin) {
        if(user.login === loginAdmin ) {
          if(user.password === passwordAdmin) {
            $location.path('/management');
          } else {
            $window.alert('неверно введён пароль!');
          }
        } else {
          $window.alert('неверно введён логин!');
        }
      } else {
        $location.path('/');
      }
    };
  });