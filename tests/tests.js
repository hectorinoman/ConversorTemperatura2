var expect = chai.expect;

describe("TesT", function() {



  it("56F", function() {
    var temp = new Temperatura(56,"F");
    expect(temp.get_valor()).to.equal(56);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("78C", function() {
    var temp = new Temperatura(78,"C");
    expect(temp.get_valor()).to.equal(78);
    expect(temp.get_tipo()).to.equal("C");
  });

});