// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função.
// Escreva o resultado da função na tela dizendo qual menor número.

let rs = require('readline-sync')
let num1 = rs.questionInt('Digite um número: ')
let num2 = rs.questionInt('Digite outro número: ')

function menor (){
    if(num1<num2){
        console.log(` O número menor é o primeiro número: ${num1}`)  
    } else (console.log(` O número menor é o segundo número: ${num2}`))
}

menor()