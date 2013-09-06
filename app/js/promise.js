var myModule = angular.module('myModule', []);
// From this point on, we'll attach everything to 'myModule'

myModule.factory('HelloWorld', function ($q, $timeout) {

  var getMessages = function (callback) {
    $timeout(function () {
      callback(['Hello', 'world!']);
    }, 2000);
  };

  var getMessagesByPromise = function () {
    var deferred = $q.defer();

    $timeout(function () {
      deferred.resolve(['Hello', 'world!', 'by promise']);
    }, 2000);

    return deferred.promise;
  };

  var getSuperPromise = function () {
    var deferred = $q.defer();

    $timeout(function () {
      console.log("getSuperPromise")
      deferred.resolve({
        message: "hello message!",
        method: function(){
          return ["hello", "method"]
        }
      });
    }, 2000);

    return deferred.promise;
  };

  return {
    getMessages: getMessages,
    getMessagesByPromise: getMessagesByPromise,
    getSuperPromise: getSuperPromise
  };

});

myModule.controller('HelloCtrl', function ($scope, HelloWorld) {

  HelloWorld.getMessages(function (messages) {
    $scope.messages = messages;
  });
  HelloWorld.getMessagesByPromise().then(function (messages) {
    $scope.messagesByPromise = messages;
  });

  $scope.improvedPromise = HelloWorld.getMessagesByPromise();
  $scope.superPromise = HelloWorld.getSuperPromise();
});