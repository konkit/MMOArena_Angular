'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.services.PlayerService
 * @description
 * # PlayerService
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .factory('AuthService', function ($http, $localStorage) {
    var authService = {};

    authService.login = function(login, password) {
      return $http.post(
        'http://localhost:8080/api/login',
        { username: login, password: password }
      )
    };

    authService.loginLocal = function(login, password) {
      return { id: 1, token: 'asdf' }
    };

    return authService;
  });
