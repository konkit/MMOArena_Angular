'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:PlayerDashboardCtrl
 * @description
 * # PlayerDashboardCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('LoginModalCtrl', function ($scope, $location, $uibModalInstance, AuthService) {

    $scope.ok = function () {
      var result = AuthService.login($scope.login, $scope.password);
      console.log(result);
      $uibModalInstance.close();
      $location.path('/player')
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
});
