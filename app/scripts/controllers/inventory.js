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

    $scope.player = InventoryService.get();

  });
