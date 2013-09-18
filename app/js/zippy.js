var app = angular.module('app', []);
app.controller("AppCtrl", function ($scope) {

});

app.directive("zippy", function () {
  return {
    restrict: "E",
    scope: {title: "@"},
    transclude: true,
    template: '<div><h3 ng-click="toggleContent()">This is {{title}}</h3><div ng-show="isContentVisible" ng-transclude>Hi, </div></div>',
    link: function (scope) {
      scope.isContentVisible = false;
      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
});