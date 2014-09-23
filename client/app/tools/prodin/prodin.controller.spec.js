'use strict';

describe('Controller: ProdinCtrl', function () {

  // load the controller's module
  beforeEach(module('nolKecilApp'));

  var ProdinCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProdinCtrl = $controller('ProdinCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
