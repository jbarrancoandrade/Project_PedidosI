'use strict';


angular.module('projectPedidosApp')
  .controller('AlmCtrl', ['$scope', 'almacenes',  function ($scope, almacenes) {



    $scope.logout = function () {
      $scope.dataLoading = false;
      Auth.ClearCredentials();
      $location.path('/Login.html');

    };
  }]);
