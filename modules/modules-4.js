// Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

var isPrime = require('prime-number')
var rs = require('readline-sync')

var num = rs.questionInt(`Digite um número: `)

if(isPrime(num) == true){
    console.log(`O número ${num} é primo.`)
}else {
    console.log(`O número ${num} não é primo.`)
}