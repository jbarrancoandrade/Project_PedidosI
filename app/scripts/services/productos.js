'use strict';

angular.module('projectPedidosApp')
  .factory('productos', function ($resource) {
    return $resource("http://192.168.1.55:8080/appi_Salesautomation/rest/Product/Getproduct/001/001/01/02/10/TRUE",
      {},
      { get: { method: "GET", isArray: true }
      })
  });
