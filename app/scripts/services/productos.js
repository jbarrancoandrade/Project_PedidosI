'use strict';

angular.module('projectPedidosApp')
  .factory('productos', function ($resource) {
    return $resource('http://localhost:8000/api/productos');
  });
