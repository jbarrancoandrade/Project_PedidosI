'use strict';

/**
 *
 */
angular.module('projectPedidosApp')
  .controller('LogoutController',['$scope','$location','Auth', function ($scope,$location, Auth) {

    $scope.logout = function () {
      $scope.dataLoading = false;
      Auth.ClearCredentials();
      $location.path('/Login.html');

    };

  }]

);
