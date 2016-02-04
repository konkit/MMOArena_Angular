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
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/player', {
        templateUrl: 'views/player_dashboard.html',
        controller: 'PlayerDashboardCtrl'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl'
      })
      .when('/market', {
        templateUrl: 'views/market.html',
        controller: 'MarketCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
