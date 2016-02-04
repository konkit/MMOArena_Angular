'use strict';

/**
 * @ngdoc function
 * @name mmoarenaApp.controller:PlayerDashboardCtrl
 * @description
 * # PlayerDashboardCtrl
 * Controller of the mmoarenaApp
 */
angular.module('mmoarenaApp')
  .controller('HomeCtrl', function ($scope, $uibModal, $log) {

    console.log('HomeCtrl');

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {
      console.log('Open');

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/login_modal.html',
        controller: 'LoginModalCtrl',
        size: 'md',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
