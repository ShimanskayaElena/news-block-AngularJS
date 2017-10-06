'use strict';

describe('Controller: ManagementnewsCtrl', function () {

  // load the controller's module
  beforeEach(module('syberryAngularJsApp'));

  var ManagementnewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagementnewsCtrl = $controller('ManagementnewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManagementnewsCtrl.awesomeThings.length).toBe(3);
  });
});
