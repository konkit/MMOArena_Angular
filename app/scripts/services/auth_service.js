'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.services.PlayerService
 * @description
 * # PlayerService
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .factory('AuthService', function () {
    var authService = {};

    authService.login = function(login, password) {
      return { id: 1, token: 'asdf' }
    };

    return authService;

    //return $resource('player/:playerId.json', {}, {
    //  query: { method: 'GET', params: { playerId: 'player' }, isArray: true }
    //});
  });
