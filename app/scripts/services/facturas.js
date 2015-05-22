'use strict';


angular.module('projectPedidosApp')
  .factory('facturas', function ($resource) {
    return $resource('http://localhost:8000/api/factura');
  });
