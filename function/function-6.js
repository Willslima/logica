// Escreva uma função que receba dois números o primeiro será a base e o segundo a
// potência e no final a função retorna a base elevada pela potência.
// Faça um programa que peça ao usuário a base e a potência e forneça para a função,
// no final imprima o resultado.
// OBS: O algoritmo só precisa saber lidar com números inteiros.

var rs = require('readline-sync')
var num = rs.questionInt('Digite o número base: ')
var potencia = rs.questionInt('Digite a potencia: ')
var soma = num
var x = 1

function calculoPot() {
    while ( potencia > x){
        soma = soma * num
        potencia --
    }
    console.log(soma)

}

calculoPot()