/**
 * Created by jhonbarranco on 4/18/15.
 */
'use strict';
angular.module('projectPedidosApp').controller('AuthCtrl',
  ['$scope', '$rootScope', '$location', 'Auth',
    function ($scope, $rootScope, $location, Auth) {
      // reset login status
      Auth.ClearCredentials();

      $scope.dataLoading = false;

      $scope.login = function () {
        $scope.dataLoading = true;
        Auth.Login($scope.username, $scope.password, function (response) {
          if (response.success) {
            Auth.SetCredentials($scope.username, $scope.password,true);
            $location.path('/main.html');

          } else {
            $scope.error = response.message;
            $scope.dataLoading = false;

          }
        });
      };


      $scope.logout = function () {
        $scope.dataLoading = false;
        Auth.ClearCredentials();
        $location.path('/Login.html');

      };




    }]);
