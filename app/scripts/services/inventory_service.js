'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.services.PlayerService
 * @description
 * # PlayerService
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .factory('InventoryService', function ($http, $localStorage) {
    var inventoryService = {};

    inventoryService.getItems = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/item/index',
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    inventoryService.buyItem = function(id) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/item/buy',
        data: {id: id},
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    inventoryService.equipItem = function(id) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/item/equip',
        data: {id: id},
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    inventoryService.unequipItem = function(id) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/item/unequip',
        data: {id: id},
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    inventoryService.getSpells = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/playerSpell/indexJson',
        headers: {
          'Authorization': 'Bearer ' + $localStorage.token
        }
      });
    };

    return inventoryService;
  });
