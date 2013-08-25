describe("filter", function(){
  beforeEach(module("myApp"));

  describe("reverse", function(){
    it("should reverse a string", inject(function(reverseFilter){
      expect("CBA").toEqual("CBA");
    }))
  });
})