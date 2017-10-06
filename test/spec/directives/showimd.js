'use strict';

describe('Directive: showImd', function () {

  // load the directive's module
  beforeEach(module('syberryAngularJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-imd></show-imd>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the showImd directive');
  }));
});
