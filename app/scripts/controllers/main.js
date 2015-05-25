'use strict';

angular.module('projectPedidosApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$location', 'Auth',
    function ($scope, $rootScope, $location, Auth) {



      $scope.logout = function () {
        $scope.dataLoading = false;
        Auth.ClearCredentials();
        $location.path('/Login.html');

      };


  }]);
