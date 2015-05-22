'use strict';

describe('Service: facturas', function () {

  // load the service's module
  beforeEach(module('modulosGeneralesApp'));

  // instantiate service
  var facturas;
  beforeEach(inject(function (_facturas_) {
    facturas = _facturas_;
  }));

  it('should do something', function () {
    expect(!!facturas).toBe(true);
  });

});
