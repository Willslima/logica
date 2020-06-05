// Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
// números fornecidos.

var user = require('readline-sync')
var num1 = user.questionInt('Digite um número ')
var num2 = user.questionInt('Digite um número ')
var num3 = user.questionInt('Digite um número ')
var num4 = user.questionInt('Digite um número ')
var num5 = user.questionInt('Digite um número ')
var num6 = user.questionInt('Digite um número ')
var num7 = user.questionInt('Digite um número ')
var num8 = user.questionInt('Digite um número ')
var num9 = user.questionInt('Digite um número ')
var num10 = user.questionInt('Digite um número ')
var num11 = user.questionInt('Digite um número ')
var num12 = user.questionInt('Digite um número ')
var num13 = user.questionInt('Digite um número ')
var num14 = user.questionInt('Digite um número ')
var num15 = user.questionInt('Digite um número ')

var calculo = num1 + num2 + num3  + num4  + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14 + num15

console.log('Os valores deram a soma de:', calculo)
console.log('A média dos números é:', calculo/15)