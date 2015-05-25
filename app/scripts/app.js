'use strict';

/**
 * @ngdoc overview
 * @name projectPedidosApp
 * @description
 * # projectPedidosApp
 *
 * Main module of the application.
 */

angular
  .module('projectPedidosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/clientes',{
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl'
      })
      .when('/proveedores',{
        templateUrl: 'views/proveedores.html',
        controller: 'ProveedoresCtrl'
      })
      .when('/compras',{
        templateUrl: 'views/compras.html',
        controller: 'ComprasCtrl'
      })
      .when('/servicios',{
        templateUrl: 'views/servicios.html',
        controller: 'ServiciosCtrl'
      })
      .when('/productos',{
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl'
      })
      .when('/Almacenes',{
        templateUrl: '../views/Almacenes.html',
        controller: 'AlmCtrl'
      })
      .when('/facturas',{
        templateUrl: 'views/facturas.html',
        controller: 'FacturasCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Login', {
        templateUrl: 'views/Login.html',
        controller:  'AuthCtrl',
        hideMenus: true
      })
      .when('/logout', {
      controller: 'LogoutController'
       })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {

      // keep user logged in after page refresh
      $rootScope.globals = $cookieStore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line

      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/Login' && !$rootScope.globals.currentUser) {

          $location.path('/Login');
        }
      });
    }])
