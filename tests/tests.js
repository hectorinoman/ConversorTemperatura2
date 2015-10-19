
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
    

  it("32F = 0C", function() {
    var temp = new Temperatura();
    temp.set_valor(32);
    temp.set_tipo("F");
    var result = temp.Celsius();
    expect(result).to.equal(0);
  });

  it("8.23C = 46.814F", function() {
    var temp = new Temperatura();
    temp.set_valor(8.23);
    temp.set_tipo("C");
    var result = temp.Fahrenheit();
    expect(result).to.equal(46.814);
  });
  

});
