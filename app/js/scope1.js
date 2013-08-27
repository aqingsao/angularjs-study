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

app.controller("ChoreCtrl", function($scope){
  $scope.logChore = function(chore){
    alert(chore + " is done!")
  }
})
app.directive("kid3", function(){
  return {
    restrict: 'E',
    scope: {
      done: "&"
    },
    template: '<input type="text" ng-model="chore""> ' +
      '{{chore}} ' +
      '<div class="button" ng-click="done(\'{{chore}}\')">I\'m done</div>',
    link: function(scope){
      console.log(scope);
    }
  }
});

