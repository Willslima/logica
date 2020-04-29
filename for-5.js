// Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
// usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
// outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
// Exemplo de tela de saída:

var rs = require('readline-sync')
while (true) {

    var numero = rs.questionInt('Insira um numero para o calculo do fatorial: ')

    var resultado = 1
    for (; numero > 1; numero--) {
        resultado = resultado * numero
    }
    console.log(resultado)
    resp = rs.question('Voce deseja continuar? (S)sim - (N)nao ')
    if (resp == 'n'){break}
}