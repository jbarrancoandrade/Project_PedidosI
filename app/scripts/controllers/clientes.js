'use strict';


angular.module('projectPedidosApp')
  .controller('ClientesCtrl',['$scope','clientes','$mdDialog','Auth', function ($scope, clientes, $mdDialog,Auth) {


    /*$scope.cargar = function (client) {
      $scope.newCliente = client;
    };*/

    $scope.clientes = clientes.get();

    $scope.diaogNewUser = function(ev,x) {
      $mdDialog.show({
        controller: ['$scope', '$mdDialog', 'client', '$location', function ($scope, $mdDialog, client, $location) {

          $scope.newCliente = client;

          $scope.cancel = function () {
            $mdDialog.cancel();
          };
          $scope.continuar = function () {
            $location.path('/Almacenes');
            $mdDialog.hide();
          };
        }],
        templateUrl: 'views/dialogs/dialogo_cliente.html',
        targetEvent: ev,
        locals: {client: x},
        bindToController: true
      });
    }

    $scope.logout = function () {
      $scope.dataLoading = false;
      Auth.ClearCredentials();
      $location.path('/Login.html');

    };


  }]);

