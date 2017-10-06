'use strict';

describe('Controller: EditingCtrl', function () {

  // load the controller's module
  beforeEach(module('syberryAngularJsApp'));

  var EditingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditingCtrl = $controller('EditingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditingCtrl.awesomeThings.length).toBe(3);
  });
});
