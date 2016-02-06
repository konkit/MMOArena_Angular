'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('InventoryCtrl', function ($scope, $window, InventoryService) {

    $scope.buyItem = function(itemId) {
      InventoryService.buyItem(itemId)
        .success(function(data) {
          fetchItems();
        })
    };

    $scope.equipItem = function(itemId) {
      InventoryService.equipItem(itemId)
        .success(function(data) {
          fetchItems();
        })
    };

    $scope.unequipItem = function(itemId) {
      InventoryService.unequipItem(itemId)
        .success(function(data) {
          fetchItems();
        })
    };

    function fetchItems() {
      InventoryService.getItems().success(onItemsFetched);
    }
    fetchItems();


    $scope.allSpells = InventoryService.getSpells();

    function onItemsFetched(data) {
      $scope.equippedItems = data.equippedItems;
      $scope.unequippedItems = data.unequippedItems;
      $scope.otherItems = data.otherItems;
    }

  });
