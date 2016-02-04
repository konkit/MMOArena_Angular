'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.services.PlayerService
 * @description
 * # MarketService
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .factory('MarketService', function () {
    var marketService = {};

    marketService.getItems = function() {
      return [
        { name: 'Item1' },
        { name: 'Item2' },
        { name: 'Item3' }
      ];
    };

    marketService.getSpells = function() {
      return [
        { name: 'Spell1' },
        { name: 'Spell2' },
        { name: 'Spell3' }
      ];
    };

    return marketService;

    //return $resource('player/:playerId.json', {}, {
    //  query: { method: 'GET', params: { playerId: 'player' }, isArray: true }
    //});
  });
