'use strict';


angular.module('projectPedidosApp')
  .controller('InventCtrl',['$scope', 'inventarios', function ($scope, inventarios) {

    $scope.inventarios = inventarios.get();



  }]);
