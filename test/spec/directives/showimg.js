'use strict';

describe('Directive: showImg', function () {

  // load the directive's module
  beforeEach(module('syberryAngularJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-img></show-img>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the showImg directive');
  }));
});
