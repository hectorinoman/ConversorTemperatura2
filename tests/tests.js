
var expect = chai.expect;

describe("TesT", function() {



  it("56F", function() {
    
    Temperatura.prototype = new Temperatura;
      
    var temp = new Medida(56,"F");
    expect(temp.get_valor()).to.equal(56);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("78C", function() {
    var temp = new Medida(78,"C");
    expect(temp.get_valor()).to.equal(78);
    expect(temp.get_tipo()).to.equal("C");
  });

});
