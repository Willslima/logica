// (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *
// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).

let rs = require ('readline-sync')
let n = rs.questionInt('Digite um número: ')

var sinal = '*'
var sinal2 = '*'
var cont = 0

while(cont < n){
    console.log(sinal)
    sinal = sinal + sinal2
    cont ++
}

// console.log(sinal += sinal)