'use strict';

describe('Service: compras', function () {

  // load the service's module
  beforeEach(module('modulosGeneralesApp'));

  // instantiate service
  var compras;
  beforeEach(inject(function (_compras_) {
    compras = _compras_;
  }));

  it('should do something', function () {
    expect(!!compras).toBe(true);
  });

});
