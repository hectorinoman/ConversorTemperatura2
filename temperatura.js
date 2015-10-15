"use strict";

function Medida(valor, tipo){
  this.valor=valor; //valor numerico
  this.tipo=tipo; //tipo cadena
}

function Temperatura(){
}

Temperatura.prototype = new Medida();

 
 Medida.prototype.get_valor = function(){ 
   return this.valor; 
 }

 Medida.prototype.get_tipo = function(){ 
   return this.tipo; 
 }

 Medida.prototype.set_valor = function(valor){ 
   this.valor_=valor;
 }

 Medida.prototype.set_tipo = function(tipo){ 
   this.tipo_=tipo; 
 }