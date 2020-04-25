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
var questao = rs.question('Digite A ou B \n A para sair \n B para realizar um calculo ')

while (questao == 'b' || questao == 'B') {
    var n1 = rs.questionInt('Digite um número ')
    var n2 = rs.questionInt('Digite outro número ')
    var resultado = 0
    resultado = n1 + n2
    console.log('O resultado da sua conta é: ' + resultado)
    var opCa = rs.question('Digite C para realizar outro calculo ou A para sair ')
    if (opCa == 'c' || opCa == 'C') { }
    else if (opCa == 'A' || opCa == 'a') {
        break
    } else if (questao != 'b' && questao != 'B' && opCa != 'a' && opCa != 'A' && opCa != 'c' && opCa != 'C') { console.log('Comando não entendido ! Digite A ou B \n A para sair \n B para realizar um calculo ') }
}


