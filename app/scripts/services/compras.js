'use strict';

angular.module('projectPedidosApp')
  .factory('compras', function ($resource) {
    return $resource('http://localhost:8000/api/compra');
  });

