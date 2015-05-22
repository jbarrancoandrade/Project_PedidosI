'use strict';


angular.module('projectPedidosApp')
  .controller('FacturasCtrl',['$scope', 'facturas', function ($scope, facturas) {

    facturas.get(function (response) {
      $scope.facturas = response.results;
    });
  }]);
