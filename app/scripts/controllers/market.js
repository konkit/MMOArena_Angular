'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('MarketCtrl', function ($scope, InventoryService, MarketService) {

    $scope.player = InventoryService.get();

    $scope.allItems = MarketService.getItems();

    $scope.allSpells = MarketService.getSpells();

    $scope.buyItem = function(itemId) {
      MarketService.buyItem(itemId);
    };

    $scope.sellItem = function(itemId) {
      MarketService.sellItem(itemId);
    };

    $scope.buySpell = function(spellId) {
      MarketService.buySpell(spellId);
    };

    $scope.sellSpell = function(spellId) {
      MarketService.sellSpell(spellId);
    };
  });
