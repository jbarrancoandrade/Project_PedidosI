'use strict';

angular.module('projectPedidosApp')
  .controller('ProveedoresCtrl',['$scope', 'proveedores', function ($scope, proveedores) {
    proveedores.get(function (response) {
      $scope.proveedores = response.results;
    });
  }]);
