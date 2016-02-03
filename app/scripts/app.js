'use strict';

/**
 * @ngdoc overview
 * @name mmoarenaApp
 * @description
 * # mmoarenaApp
 *
 * Main module of the application.
 */
angular
  .module('mmoarenaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/player', {
        templateUrl: 'views/player_dashboard.html',
        controller: 'PlayerDashboardCtrl'
      })
      .when('/market', {
        templateUrl: 'views/market.html',
        controller: 'MarketCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
