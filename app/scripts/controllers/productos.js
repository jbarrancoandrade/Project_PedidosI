'use strict';


angular.module('projectPedidosApp')
  .controller('ProductosCtrl',['$scope', 'productos', function ($scope, productos) {
    productos.get(function (response) {
      $scope.productos = response.results;
    });
  }]);
