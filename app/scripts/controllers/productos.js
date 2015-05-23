'use strict';


angular.module('projectPedidosApp')
  .controller('ProductosCtrl',['$scope', 'productos', function ($scope, productos) {


    //obteniedo data
    $scope.productos = productos.get();

  }]);
