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
    $scope.player = PlayerService.get();

    $scope.playersOnline = 0;

    $scope.expTillNextLevel = 150 * $scope.player.level;
    $scope.expInPercent = $scope.player.exp * 100 / $scope.expTillNextLevel;
  });
