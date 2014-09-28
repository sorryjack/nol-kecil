'use strict';

describe('Controller: HpvCtrl', function () {

  // load the controller's module
  beforeEach(module('nolKecilApp'));

  var HpvCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HpvCtrl = $controller('HpvCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
