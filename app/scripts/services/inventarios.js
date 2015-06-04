'use strict';


angular.module('projectPedidosApp')
  .factory('inventarios', function ($resource) {

    return $resource("http://192.168.1.55:8080/appi_Salesautomation/rest/Invent/GetInvent/:codalm",
      {codalm:'001'},
      { get: { method: "GET", isArray: true }
      })
  });
