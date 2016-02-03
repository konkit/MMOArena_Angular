'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:PlayerDashboardCtrl
 * @description
 * # PlayerDashboardCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('PlayerDashboardCtrl', function ($scope) {
    $scope.player = {
      name: 'Konkit',
      level: 1,
      exp: 50
    };

    $scope.playersOnline = 0;

    $scope.assignedItems = [
      {name: 'Item1'},
      {name: 'Item2'},
      {name: 'Item3'}
    ];
    $scope.assignedSpells = [
      {name: 'Spell1'},
      {name: 'Spell2'},
      {name: 'Spell3'}
    ];

    $scope.playerItems = [
      {name: 'Item1'},
      {name: 'Item2'},
      {name: 'Item3'}
    ];
    $scope.playerSpells = [
      {name: 'Spell1'},
      {name: 'Spell2'},
      {name: 'Spell3'}
    ];

    $scope.expTillNextLevel = 150 * $scope.player.level;
    $scope.expInPercent = $scope.player.exp * 100 / $scope.expTillNextLevel;
  });
