'use strict';

describe('Service: productos', function () {

  // load the service's module
  beforeEach(module('modulosGeneralesApp'));

  // instantiate service
  var productos;
  beforeEach(inject(function (_productos_) {
    productos = _productos_;
  }));

  it('should do something', function () {
    expect(!!productos).toBe(true);
  });

});
