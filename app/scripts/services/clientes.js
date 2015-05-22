'use strict';


angular.module('projectPedidosApp')
  .factory('clientes', function ($resource) {
    return $resource('http://localhost:8000/api/clientes');
  });
