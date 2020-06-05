// Fazer um programa que leia um valor de DDI e informe o nome do país
// Correspondente ao DDI. Por exemplo:
// Se lê 1 imprime "Estados Unidos",
// Se lê 49 imprime "Alemanha",
// Se lê 54 imprime "Argentina",
// Se lê 55 imprime "Brasil",
// Se lê 35 imprime "Portugal".
// Deve também imprimir uma mensagem caso o DDI não esteja cadastrado.

var user = require('readline-sync')
var ddi = user.question('Informe o ddi do país desejado ')

if (ddi == 1 || ddi == '+1'){
    console.log('O DDI ' + ddi + ' é do Estados Unidos')
}else if (ddi == 49 || ddi == '+49'){
    console.log('O DDI ' + ddi + ' é da Alemanha')
}else if (ddi == 54 || ddi == '+54'){
    console.log('O DDI ' + ddi + ' é da Argentina')
}else if (ddi == 55 || ddi == '+55'){
    console.log('O DDI ' + ddi + ' é do Brasil')
}else if (ddi == 35 || ddi == '+35'){
    console.log('O DDI ' + ddi + ' é do Portugal')
} else {
    console.log(ddi + ' é um DDI não cadastrado \n Tente novamente mais tarde.')
}