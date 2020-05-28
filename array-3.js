// // (LEFT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
// // 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// // jogador B.
// // Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// // que apenas o jogador A colocou diferente do B.
// // EX: Jogador A : 1, 2, 3, 4, 5
// // Jogador B : 1,2,3,8,7
// // Algoritmo imprime :
// // 4,5

var rs = require('readline-sync')
var j1 = rs.question('Digite o nome do jogador 1: ')
var j2 = rs.question('Digite o nome do jogador 2: ')

var guardaN1 = []
var guardaN2 = []

for (var i = 0; i < 5; i++) {
    var n1 = rs.questionInt('Jogador 1, digite um número de 1 a 10. ')
    guardaN1.push(n1)
    var n2 = rs.questionInt('Jogador 2, digite um número de 1 a 10. ')
    guardaN2.push(n2)
}

console.log('Os números do(a)', j1, ' são: ', guardaN1, 'Os números do(a)', j2, ' são', guardaN2)

var numDiferentes = []

for (var i = 0; i < guardaN1.length; i++) {
    if (guardaN2.includes(guardaN1[i]) == false) { 
        numDiferentes.push(guardaN1[i])
     }
}

console.log(`Os números diferentes que o ${j1} inseriu são: ${numDiferentes}`)


