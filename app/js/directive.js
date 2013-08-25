var app = angular.module("superhero", [])

app.directive("supermane", function(){
  return {
    restrict: "E",
    template: "<div>I'm superman-e</div>"
  }
});

app.directive("supermana", function(){
  return {
    restrict: "A",
    link: function(){
      alert("I'm supermanA")
    }
  }
});
app.directive("supermanC", function(){
  return {
    restrict: "C",
    link: function(){
      alert("I'm supermanC")
    }
  }
});
app.directive("supermanm", function(){
  return {
    restrict: "M",
    link: function(){
      alert("I'm supermanM")
    }
  }
});
