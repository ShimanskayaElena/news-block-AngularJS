'use strict';

describe('Controller: EditingnewsCtrl', function () {

  // load the controller's module
  beforeEach(module('syberryAngularJsApp'));

  var EditingnewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditingnewsCtrl = $controller('EditingnewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditingnewsCtrl.awesomeThings.length).toBe(3);
  });
});
