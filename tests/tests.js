
var expect = chai.expect;

describe("TesT", function() {



  it("56F", function() {
    var temp = new Medida(56,"F");
    expect(temp.get_valor()).to.equal(56);
    expect(temp.get_tipo()).to.equal("F");
  });

  it("78C", function() {
    var temp = new Medida(78,"C");
    expect(temp.get_valor()).to.equal(78);
    expect(temp.get_tipo()).to.equal("C");
  });
  
    it("5X = ERROR", function() {
      window.onload = function() {
        var temp = new Medida(5,0,"X");
        calculate();
        expect(fin.innerHTML).to.match("/ERROR/");
      }
    });

});
