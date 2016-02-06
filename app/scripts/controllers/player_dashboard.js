'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:PlayerDashboardCtrl
 * @description
 * # PlayerDashboardCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('PlayerDashboardCtrl', function ($scope, PlayerService) {

    PlayerService.get()
      .success(onPlayerDataFetched)
      .error(onPlayerDataFetchError);

    function onPlayerDataFetched(data) {
      $scope.player = data.character;
      $scope.items = data.items;
      $scope.spells = data.spells;

      $scope.playersOnline = 0;

      $scope.expTillNextLevel = 150 * $scope.player.level;
      $scope.expInPercent = $scope.player.exp * 100 / $scope.expTillNextLevel;
    }

    function onPlayerDataFetchError(data) {

    }

  });
