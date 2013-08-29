var app = angular.module("app", []);

app.controller("AppCtrl1", function($scope){
  $scope.logChore = function(chore){
    alert(chore + " is done!")
  }
})
app.directive("kid", function(){
  return {
    restrict: 'E',
    scope: {
      done: "&"
    },
    template: '<input type="text" ng-model="chore""> ' +
      '{{chore}} ' +
      '<div class="button" ng-click="done({chore:chore})">I\'m done</div>',
    link: function(scope){
      console.log(scope);
    }
  }
});

app.controller("AppCtrl2", function($scope){
  $scope.ctrlFlavor = "blackBerry";
})
app.directive("drink", function(){
  return {
    scope: {
      flavor: "@"
    },
    template: '<div>{{flavor}}</div>'
  }
});

app.controller("AppCtrl3", function($scope){
  $scope.ctrlFlavor = "redBerry";
})
app.directive("eat", function(){
  return {
    scope: {
      flavor: "="
    },
    template: '<input type="text" ng-model="flavor">'
  }
})

app.controller("AppCtrl4", function($scope){
  $scope.callHome = function(message){
    alert(message);
  }
})
app.directive("phone", function(){
  return {
    scope: {
      dial: "&"
    },
    template: '<input type="text" ng-model="value">' +
      '<div class="button" ng-click="dial({message:value})">call home!</div>'
  }
})