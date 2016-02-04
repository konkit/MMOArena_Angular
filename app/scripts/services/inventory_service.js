'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.services.PlayerService
 * @description
 * # PlayerService
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .factory('InventoryService', function () {
    var inventoryService = {};

    inventoryService.get = function() {
      return {
        id: 1234,
        items: [
          { id: 1, name: 'Item1' },
          { id: 2, name: 'Item2' },
          { id: 3, name: 'Item3' }
        ],
        spells: [
          { id: 1, name: 'Spell1' },
          { id: 2, name: 'Spell2' },
          { id: 3, name: 'Spell3' }
        ]
      };
    };

    inventoryService.assignItem = function(id) {
      console.log(id);
    };

    inventoryService.assignSpell = function(id) {
      console.log(id);
    };

    inventoryService.unassignItem = function(id) {
      console.log(id);
    };

    inventoryService.unassignSpell = function(id) {
      console.log(id);
    };

    return inventoryService;

    //return $resource('player/:playerId.json', {}, {
    //  query: { method: 'GET', params: { playerId: 'player' }, isArray: true }
    //});
  });
