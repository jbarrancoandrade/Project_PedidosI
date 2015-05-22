'use strict';

angular.module('projectPedidosApp')
  .factory('ventas', function ($resource) {
    return $resource('http://localhost:8000/api/ventas');
  })
  .factory('detalleVenta', function ($resource){
    return $resource('http://localhost:8000/api/detalle-venta');
  });
