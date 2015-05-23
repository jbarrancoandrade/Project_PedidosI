'use strict';


angular.module('projectPedidosApp')
  .controller('ClientesCtrl',['$scope','clientes','$mdDialog','Auth','$http', function ($scope, clientes, $mdDialog,Auth,$http) {

    //obteniedo data de los clientes
    $scope.clientes = clientes.get();

    //recibe evento click y datos del cliente escojido en este caso renombrada x
    $scope.diaogNewUser = function($event, x) {
      //para agregar un body al elemento angular
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        controller: ['$scope','$mdDialog' ,'client','$location' ,function ($scope, $mdDialog,client, $location) {

          //binding de los datos de un cliente
          $scope.newCliente = client;

          //metodo que cancela el dialogo
          $scope.cancel = function () {
            $mdDialog.cancel();
          };

          //metodo continuar siguiente template
          $scope.continuar = function (x) {
            $mdDialog.hide();
            $location.path('/Almacenes');

          };
        }],
        parent: parentEl,
        targetEvent: $event,
        templateUrl: 'views/dialogs/dialogo_cliente.html',
        locals: {client: x},
        bindToController: true
      });


    }




  }]);

