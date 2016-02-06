'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:PlayerDashboardCtrl
 * @description
 * # PlayerDashboardCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('FightModalCtrl', function ($scope, $location, $uibModalInstance, AuthService, PlayerService, $localStorage) {
    $scope.playersOnline = 0;

    $scope.statusLog = [];

    var playerData;
    PlayerService.getFightDataJson().success(function(data) {
      playerData = data;
      requestFight(playerData.id);
    });

    var socket = io.connect('http://127.0.0.1:5000');

    socket.on('message', function(data){
      console.log(data.message);
    });

    socket.on('requestCreated', function(data) {
      $scope.statusLog.push('Request created, id: ' + data.requestId + '\n');
    });

    socket.on('fightFound', function(data) {
      $scope.statusLog.push('Fight found: ' + JSON.stringify(data) + '\n' );

      PlayerService.getFightDataJson().success(function(playerData) {
        console.log("Player data:");
        console.log(playerData);

        //u.getUnity().SendMessage("ScriptHolder", "SetPlayer", new XMLSerializer().serializeToString(playerData));

        PlayerService.getFightDataXML(data.enemyId).success(function(enemyData) {
          console.log("Enemy data:");
          console.log(enemyData);

          //u.getUnity().SendMessage("ScriptHolder", "SetEnemy",  new XMLSerializer().serializeToString(enemyData));

          //u.getUnity().SendMessage("ScriptHolder", "StartGame", data.roomId.toString() );
        });
      });

    });

    function requestFight() {
      socket.emit('fightRequest', {'playerId': playerData.id});
    }

  });
