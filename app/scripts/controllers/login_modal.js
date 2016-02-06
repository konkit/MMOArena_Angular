'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:PlayerDashboardCtrl
 * @description
 * # PlayerDashboardCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('LoginModalCtrl', function ($scope, $location, $uibModalInstance, AuthService, $localStorage) {

    $scope.ok = function () {
      AuthService.login($scope.login, $scope.password)
        .success(onLoginSuccess)
        .error(onLoginError);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    function onLoginSuccess(data) {
      console.log(data);

      $localStorage.token = data.access_token;
      $uibModalInstance.close();
      $location.path('/player')
    }

    function onLoginError(data) {
      console.log(data);

      return {status: 'ERROR', message: 'Auth failed' + JSON.stringify(data)}
    }
});
