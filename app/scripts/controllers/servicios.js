'use strict';


angular.module('projectPedidosApp')
  .controller('ServiciosCtrl', ['$scope', 'servicio','detalleServicio', function ($scope, servicio, detalleServicio) {
    servicio.get(function (response) {
      $scope.servicio = response.results;
    });

    detalleServicio.get(function (response) {
      $scope.detalleServicio = response.results;
    });
  }]);
