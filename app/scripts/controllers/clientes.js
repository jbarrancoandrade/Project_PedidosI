'use strict';


angular.module('projectPedidosApp')
  .controller('ClientesCtrl',['$scope','clientes','$mdDialog','Auth', function ($scope, clientes, $mdDialog,Auth) {
    clientes.get(function (response) {
      $scope.clientes = response.results;
    });



    $scope.cargar = function(ev,cliente) {
      $mdDialog.show({
        controller: ['$scope','$mdDialog', 'client' ,function ($scope, $mdDialog, client) {
          console.log(client);
          $scope.newCliente = client;
          $scope.hide = function () {
            $mdDialog.hide();
          };
          $scope.cancel = function () {
            $mdDialog.cancel();
          };
          $scope.answer = function (answer) {
            $mdDialog.hide(answer);
          };
        }],
        templateUrl: 'views/dialogs/dialogo_cliente.html',
        targetEvent: ev,
        locals: {client: cliente},
        bindToController: true
      })
        .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.alert = 'You cancelled the dialog.';
        });
    };

    $scope.logout = function () {
      $scope.dataLoading = false;
      Auth.ClearCredentials();
      $location.path('/Login.html');

    };


  }]);

