'use strict';

/**
 * @ngdoc overview
 * @name syberryAngularJsApp
 * @description
 * # syberryAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('syberryAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  //.constant('baseUrl', 'http://localhost:2403/news/') /*если используется deployd в качестве заглушки для бекенда*/ 
  .constant('baseUrl', 'http://jsonplaceholder.typicode.com/posts/')
  //.constant('baseUrlImg', 'http://jsonplaceholder.typicode.com/photos/')
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix(''); /*для устранения проблем с маршрутизацией, можно также использоваль href="#!/"*/  
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'DefaultCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/authorization', {
        templateUrl: 'views/authorization.html',
        controller: 'AuthorizationCtrl'
      })
      .when('/management', {
        templateUrl: 'views/management.html',
        controller: 'ManagementCtrl'
      })
      .when('/editing', {
        templateUrl: 'views/editing.html',
        controller: 'EditingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });