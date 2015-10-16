"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Medida(valor,tipo) {
  this.valor_=valor;
  this.tipo_=tipo;
  Medida.prototype.get_valor = function(){ 
  return this.valor_; 
 }

 Medida.prototype.get_tipo = function(){ 
   return this.tipo_; 
 }

}

function Temperatura (valor, tipo) {
    Medida.call(this, valor, tipo);
    var type= this.get_tipo();
    var result;
    

    var number = parseFloat(this.get_valor());
    if (type == 'c' || type == 'C') {
      result = (number * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (number - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;

}


function calculate() {

  var temp = original.value;
  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    
    var num = m[1]; // lo que cogio los parentesis
    var type = m[2];  // lo que cogio los segundos parentesis si son celcius o farengeis
    
      Temperatura.prototype = new Medida;
      a = new Temperatura(num,type);
   
  
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead"; //no es una entrada valida 
  }

}