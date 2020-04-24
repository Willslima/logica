// 7. Faça um programa que pergunte ao usuário escolher duas opções A e B.
// A encerra o programa, B é pra fazer uma soma.
// a. Se o usuário inserir A o programa fecha
// b. Se o usuário inserir B o programa vai realizar uma operação de soma,
// solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
// segundo número o algoritmo deve apresentar a soma e também pergunta se
// quer realizar outro cálculo.
// c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
// que não entendeu o comando e solicitar novamente para inserir A ou B


var rs = require('readline-sync')
var exit = rs.question('Digite A ou B \n A para sair \n B para realizar um calculo')
var calculo;

while(exit !== 'a' || !== 'b'){
    console.log('digite uma opção valia')   
    }
}console.log('Encerrando programa')

// while(calculo == 'B') {
//     var n1 = rs.questionInt('Digite um número')
//     var n2 = rs.questionInt('Digite um número')
//     calculo = n1 + n2
// console.log('O resultado do seu cálculo é ' +calculo)