'use strict';

describe('Controller: FacturasCtrl', function () {

  // load the controller's module
  beforeEach(module('modulosGeneralesApp'));

  var FacturasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FacturasCtrl = $controller('FacturasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
