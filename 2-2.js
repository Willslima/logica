// Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
// para Fahrenheit ou Fahrenheit para Celsius.

var user = require('readline-sync')
var escolha = user.question('Digite (F) para converter graus em Fahrenheit para Celsius ou \n Digite (C) para converter graus Celsius para Fahrenheit. ')
var graus = user.question('Digite quantos graus ')


if (escolha == 'F' || escolha == 'f') {
    c = (graus-32)/1.8
    console.log('Sua conversao deu, ' + c + ' graus Celsius.')
} else if (escolha == 'C' || escolha == 'c'){
    f = (graus*1.8)+32
    console.log('Sua conversao deu, ' + f + ' graus Fahrenheit.')

} else (console.log('Desculpe não entendi.'))
