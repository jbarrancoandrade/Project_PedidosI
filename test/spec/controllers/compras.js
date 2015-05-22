'use strict';

describe('Controller: ComprasCtrl', function () {

  // load the controller's module
  beforeEach(module('modulosGeneralesApp'));

  var ComprasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComprasCtrl = $controller('ComprasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
