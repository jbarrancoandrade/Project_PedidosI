'use strict';

//var cors = require('cors');

//angular.module('projectPedidosApp').use(cors())
angular.module('projectPedidosApp')
 .factory('clientes', function ($resource) {

    return $resource("http://localhost:8080/appi_Salesautomation/rest/Customers/Getcustomers/001",
      {},
      { get: { method: "GET", isArray: true }
      })

    });


