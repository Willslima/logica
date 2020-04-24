// Faça um programa que pergunta ao usuário :
// “Insira 0 para sair ou qualquer outra tecla para o continuar.”
// Se o usuário inserir 0 o programa encerra.
// Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
// “Insira 0 para sair ou qualquer outro número para o continuar.”
// Até o usuário sair

var rs = require('readline-sync')
var keyExit = rs.question('Digite um número ')


while(keyExit != 0){
       var keyExit = rs.question('Digite um número de 0 à 9 ')
} console.log('Encerrando programa')