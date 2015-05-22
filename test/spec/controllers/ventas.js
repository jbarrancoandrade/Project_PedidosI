'use strict';

describe('Controller: VentasCtrl', function () {

  // load the controller's module
  beforeEach(module('modulosGeneralesApp'));

  var VentasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VentasCtrl = $controller('VentasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
