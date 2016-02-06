'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.services.PlayerService
 * @description
 * # PlayerService
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .factory('PlayerService', function ($http, $localStorage) {
    var playerService = {};

    playerService.get = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/character/indexJson',
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    playerService.getFightDataJson = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/fight/getPlayerDataJson',
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    playerService.getFightDataXML = function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/fight/getPlayerData' + '/' + id,
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    return playerService;
});
