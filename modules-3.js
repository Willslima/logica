// Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd

var isOdd = require ('is-odd')
var rs = require('readline-sync')

var num = rs.questionInt('Digite um número: ')

if (isOdd(num) == true){
    console.log(`O número digitado é impar: ${num}`)
}else{
    console.log(`O número digitado é par: ${num}`)
}

// console.log(isOdd('1'))//true => impar
// console.log(isOdd('2'))//false => par