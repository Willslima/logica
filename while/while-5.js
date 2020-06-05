var user = require("readline-sync");

var num = user.questionInt("Insira um numero: ")
var potencia = user.questionInt("Inisira a potencia: ")
var soma = num;
var x = 1

while (potencia > x){
    soma = soma * num;
    potencia --;
  }
  console.log(soma)