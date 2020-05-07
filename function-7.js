// Faça uma função que recebe um número e devolve seu valor absoluto.
// No final peça um número para o usuário e exiba o valor absoluto.

// O valor absoluto do algarismo 9 no número 986 é 9. 
//  valor relativo de um número depende da ordem em que o algarismo se
//   encontra. Por exemplo, o algarismo 9 no número 986 ocupa a 3º ordem, 
//   isto é, a casa das centenas. Assim, seu valor relativo é 900.

var user = require ("readline-sync")
function num_absoluto() {
    var absoluto = Math.abs(num)
    return absoluto
}
var num = user.questionInt("Insira um numero: ")
console.log(num_absoluto())