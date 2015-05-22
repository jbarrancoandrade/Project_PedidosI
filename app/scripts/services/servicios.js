'use strict';


angular.module('projectPedidosApp')
  .factory('servicio', function ($resource) {
    return $resource('http://localhost:8000/api/servicio');
  })
  .factory('detalleServicio', function ($resource) {
    return $resource('http://localhost:8000/api/detalle-servicio');
  });
