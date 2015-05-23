'use strict';


angular.module('projectPedidosApp')
  .controller('ClientesCtrl',['$scope','clientes','$mdDialog','Auth','$http', function ($scope, clientes, $mdDialog,Auth,$http) {
   /* clientes.get(function (response) {
      $scope.clientes = response.results;

    });*/

    $http.get('http://localhost:8080/appi_Salesautomation/rest/Customers/Getcustomers/001').success(function (data) {

      $scope.datos = data;
      console.log(data);
    });
    $scope.clientes = clientes.get();

    $scope.diaogNewUser = function($event, x) {

      var parentEl = angular.element(document.body);
      $mdDialog.show({
        controller: ['$scope','$mdDialog' ,'client' ,function ($scope, $mdDialog,client) {


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
        parent: parentEl,
        targetEvent: $event,
        templateUrl: 'views/dialogs/dialogo_cliente.html',
        locals: {client: x},
        bindToController: true
      });


    }

  $scope.closeDialog = function() {
      // Easily hides most recent dialog shown...
      // no specific instance reference is needed.
      $mdDialog.cancel('cancelled');
    };



  }]);

