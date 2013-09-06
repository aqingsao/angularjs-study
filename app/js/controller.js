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