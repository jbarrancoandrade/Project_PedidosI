'use strict';

describe('Controller: DialogoClienteCtrl', function () {

  // load the controller's module
  beforeEach(module('modulosGeneralesApp'));

  var DialogoClienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogoClienteCtrl = $controller('DialogoClienteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
