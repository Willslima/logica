// Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e
// o
// segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
// valor final). Usando o comando For, escreva na tela uma contagem que comece no
// primeiro número lido, escreva os números seguintes colocando apenas um número em
// cada nova linha da tela, até chegar ao valor final indicado.
// Entre com o Valor Inicial: 11
// Entre com o Valor Final: 13
// Contagem:
// 11
// 12
// 13
// Final da contagem...

let rs = require('readline-sync')
let n1 = rs.questionInt('Digite o numero inicial')
let n2 = rs.questionInt('Digite o número final')

for (let cont = n1; cont <= n2; cont++){
    
    console.log(cont)
}