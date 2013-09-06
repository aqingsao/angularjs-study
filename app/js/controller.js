var app = angular.module('app', []);
app.controller("AppCtrl", function($scope){
  $scope.sayHi = function(){
    alert("hi");
  }

  this.sayHello = function(){
    alert("hello");
  }
  return $scope.AppCtrl = this;
});

var controllers = {};
controllers.PhoneCtrl = function($scope){
  this.sayHi = function(){
    alert("hi");
  }
  return $scope.PhoneCtrl = this;
}
var directives = {};
directives.panel = function(){
  return {
    restrict: "E"
  }
}
app.controller(controllers);
app.directive(directives);