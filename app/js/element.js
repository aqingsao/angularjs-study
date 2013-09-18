var app = angular.module('app', []);

app.directive("dumbPassword", function () {
  var validElement = angular.element("<div>{{input.model}}</div>")
  this.link = function (scope, element) {
    scope.$watch("input.model", function (value) {
      if (value == "password") {
        validElement.toggleClass("alert-box alert");
      }
    });
  };

  return {
    restrict: "E",
    replace: true,
    template: '<div>\n  <input type="text" ng-model="input.model"/>\n </div>',
    compile: function (element) {
      element.append(validElement);
      return link;
    }
  }
});