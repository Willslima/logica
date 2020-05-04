// (INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3

var rs = require('readline-sync')
var nomeJogadorA = rs.question('Digite o nome dos jogadores: ')
var nomeJogadorB = rs.question('Digite o nome do segundo jogador: ')
var jA = []
var jB = []
for (var cont = 0; cont < 5; cont++) {
    var numeros = rs.questionInt('Digite um numero de 1 à 10: ')
    if (numeros < 10) {
        jA.push(numeros)
    } else {
        console.log('Digite um número de 1 à 10 ')
    }
}

for (var cont = 0; cont < 5; cont++) {
    var numeros = rs.questionInt('Digite um numero de 1 à 10: ')
    if (numeros < 10) {
        jB.push(numeros)
    } else {
        console.log('Digite um número de 1 à 10 ')
    }
}


// var numIguais = []
// for (var cont = 0; cont < 5; cont++) {
//     for (var contB; contB < 5; contB++) {
//         if (jA[contB]==jB[cont]) {
//             numIguais.push(jA[contB])

//         }
//     }
// }

console.log(numIguais)
console.log(nomeJogadorA + ' ' + jA)
console.log(nomeJogadorB + ' ' + jB)

//INCOMPLETO