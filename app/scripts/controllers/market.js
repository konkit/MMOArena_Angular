'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('MarketCtrl', function ($scope) {
    $scope.player = {
      name: 'Konkit',
      level: 1,
      exp: 0
    };

    console.log($scope.player);
  });
