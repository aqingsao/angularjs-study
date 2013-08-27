var app = angular.module("app", []);

app.controller("AppCtrl", function($scope){
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
// equals to:
//app.directive("drink", function(){
//  return {
//    scope: {},
//    template: '<div>{{flavor}}</div>',
//    link: function(scope, element, attrs){
//      scope.flavor = attrs.flavor
//    }
//  }
//});