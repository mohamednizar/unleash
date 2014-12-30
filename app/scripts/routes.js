'use strict';
/**
 * @ngdoc overview
 * @name unleashApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('unleashApp')

  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === 'AUTH_REQUIRED') {
        $location.path('/');
      }
    });
  }])

  // configure views; the authRequired parameter is used for specifying pages
  // which should only be available while logged in
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        resolve: {
          currentAuth: ['Auth', function(Auth) {
            return Auth.$waitForAuth();
          }]
        }
      })

      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountController',
        resolve: {
          currentAuth: ['Auth', function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })

      .when('/paths', {
        templateUrl: 'views/paths.html',
        controller: 'PathController',
        resolve: {
          currentAuth: ['Auth', function(Auth) {
            return Auth.$waitForAuth();
          }]
        }
      })

      .when('/paths/:userId', {
        templateUrl: 'views/path-single.html',
        controller: 'SinglePathController',
        resolve: {
          currentAuth: ['Auth', function(Auth) {
            return Auth.$waitForAuth();
          }]
        }
      })

      .when('/templates', {
        templateUrl: 'views/templates.html',
        controller: 'TemplatesController',
        resolve: {
          currentAuth: ['Auth', function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })

      .otherwise({redirectTo: '/'});
  }]);
