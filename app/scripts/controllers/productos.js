'use strict';


angular.module('projectPedidosApp')
  .controller('ProductosCtrl',['$scope', 'productos', function ($scope, productos) {


    //obteniedo data
    $scope.productos = productos.get();

    $scope.logout = function () {
      $scope.dataLoading = false;
      Auth.ClearCredentials();
      $location.path('/Login.html');

    };

  }]);
