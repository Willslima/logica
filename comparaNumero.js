var readlineSync = require('readline-sync')

var numero1 = readlineSync.question('Insira o numero 1? ')
var numero2 = readlineSync.question('Insira o numero 2?')

if(numero1 > numero2){
    console.log ('Numero: ' + numero1 + ' é maior ')
} else if (numero1 < numero2) {
    console.log('numero: ' + numero2 + ' é maior ')

} else {
    console.log('Os numeros sao iguais!')
}