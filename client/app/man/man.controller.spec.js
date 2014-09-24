'use strict';

describe('Controller: ManCtrl', function () {

  // load the controller's module
  beforeEach(module('nolKecilApp'));

  var ManCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManCtrl = $controller('ManCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
