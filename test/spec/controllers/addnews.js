'use strict';

describe('Controller: AddnewsCtrl', function () {

  // load the controller's module
  beforeEach(module('syberryAngularJsApp'));

  var AddnewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddnewsCtrl = $controller('AddnewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddnewsCtrl.awesomeThings.length).toBe(3);
  });
});
