'use strict';

describe('Service: servicios', function () {

  // load the service's module
  beforeEach(module('modulosGeneralesApp'));

  // instantiate service
  var servicios;
  beforeEach(inject(function (_servicios_) {
    servicios = _servicios_;
  }));

  it('should do something', function () {
    expect(!!servicios).toBe(true);
  });

});
