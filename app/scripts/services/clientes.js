'use strict';

//var cors = require('cors');

angular.module('projectPedidosApp')
 .factory('clientes', function ($resource) {

    return $resource("http://192.168.1.55:8080/appi_Salesautomation/rest/Customers/Getcustomers/:codven",
      {codven:'026'},
      { get: { method: "GET", isArray: true }
      })

    });


