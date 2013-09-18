var app = angular.module('app', []);

app.directive("zippy", function () {
  return {
    restrict: "E",
    scope: {title: "@"},
    transclude: true,
    template: '<div><h3 ng-click="toggleContent()">This is {{title}} <span style="font-size: 60%; font-weight: normal; color: grey;">click to show content</span></h3><div ng-show="isContentVisible" ng-transclude>Hi, </div></div>',
    link: function (scope) {
      scope.isContentVisible = false;
      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
});