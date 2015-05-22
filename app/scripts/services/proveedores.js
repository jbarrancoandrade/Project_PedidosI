'use strict';


angular.module('projectPedidosApp')
  .factory('proveedores', function ($resource) {
    return $resource('http://localhost:8000/api/proveedores');
  });
