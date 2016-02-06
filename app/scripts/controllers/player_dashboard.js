'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:PlayerDashboardCtrl
 * @description
 * # PlayerDashboardCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('PlayerDashboardCtrl', function ($scope, PlayerService, $uibModal) {

    fetchPlayerData();

    function onPlayerDataFetched(data) {
      $scope.player = data.character;
      $scope.items = data.items;
      $scope.spells = data.spells;

      $scope.expTillNextLevel = 150 * $scope.player.level;
      $scope.expInPercent = $scope.player.exp * 100 / $scope.expTillNextLevel;
    }

    function onPlayerDataFetchError(data) {

    }

    function fetchPlayerData() {
      PlayerService.get()
        .success(onPlayerDataFetched)
        .error(onPlayerDataFetchError);
    }

    $scope.openFightModal = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/fight_modal.html',
        controller: 'FightModalCtrl',
        size: 'lg'
      });

      modalInstance.result.then(function () {
        fetchPlayerData();
      });
    };

  });
