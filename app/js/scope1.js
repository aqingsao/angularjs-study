var app = angular.module("choreApp", []);

app.directive("kid1", function(){
  return {
    restrict: 'E',
    template: '<input type="text" ng-model="chore""> {{chore}}'
  }
});

app.directive("kid2", function(){
  return {
    restrict: 'E',
    scope: {},
    template: '<input type="text" ng-model="chore""> {{chore}}'
  }
});