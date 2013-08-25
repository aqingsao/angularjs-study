var myApp = angular.module("myApp", []);
myApp.factory("Avengers", function(){
  var Avengers = {};
  Avengers.cast = [
    {name: 'alex', character: 'John Wong'},
    {name: 'John Hellen', character: 'Steven Chow'},
    {name: 'John Smith', character: 'Lucy'},
    {name: 'John Width', character: 'Larry'},
    {name: 'John Who', character: 'Lisa'},
    {name: 'Cherry', character: 'Lucy John'}
  ]
  return Avengers;
})

function AvengersCtrl($scope, Avengers){
  $scope.avengers = Avengers;
}