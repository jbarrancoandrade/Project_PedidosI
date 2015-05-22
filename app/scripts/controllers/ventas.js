'use strict';


angular.module('projectPedidosApp')
  .controller('VentasCtrl', ['$scope', 'ventas', 'detalleVenta', function ($scope, ventas, detalleVenta) {

    ventas.get(function (response) {
      $scope.ventas = response.results;
    });

    detalleVenta.get(function (response) {
      $scope.detalleVenta = response.results;
    });
  }]);
