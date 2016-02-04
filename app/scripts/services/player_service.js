'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.services.PlayerService
 * @description
 * # PlayerService
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .factory('PlayerService', function () {
    var playerService = {};

    playerService.get = function() {
      return {
        id: 1234,
        name: 'Konkit',
        level: 1,
        exp: 76,
        assignedItems: [
          { name: 'Item1' },
          { name: 'Item2' },
          { name: 'Item3' }
        ],
        assignedSpells: [
          { name: 'Spell1' },
          { name: 'Spell2' },
          { name: 'Spell3' }
        ]
      };
    };

    return playerService;

    //return $resource('player/:playerId.json', {}, {
    //  query: { method: 'GET', params: { playerId: 'player' }, isArray: true }
    //});
});
