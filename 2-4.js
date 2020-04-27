// Uma empresa abriu uma linha de crédito para os funcionários.
// O valor da prestação não pode ultrapassar 30% do salário.
// Faça um programa que receba o salário, o valor do empréstimo e o número de
// prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
// informados pode ser zero ou negativo.

//linha de crédito = 30% do salário, salário = ?, valor do empréstimo = ?, prestações = ?.
//nenhum valor pode ser zero ou negativo

var user = require('readline-sync')
var salario = user.question('Digite o valor do seu salário ')
var emprestimo = user.question('Digite o valor do empréstimo desejado ')
var prest = user.question('Digite em quantas prestações deseja realizar o pagamento ')

var porcentagemPermitida = salario / 100
var trintaP = porcentagemPermitida * 30

if (salario <= 0 || emprestimo <= 0 || prest <= 0){
    console.log('Informações invalida, nenhum dos números digitados pode ser (0) zero. ')
}
 else if(emprestimo <= trintaP){
    console.log('Voce vai pagar o valor de R$' + (emprestimo/prest) + ' em ' + prest + ' vezes.')
} else if ( emprestimo > trintaP){
    console.log('Infelizmente o emprestimo não pode ser concedido. \n Valor solicitado maior que o limite. ')
}