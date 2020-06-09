// Faça um programa que receba um nome e imprima a terceira letra do nome.
// Utilize o método charAt() para esta atividade.

let rs = require('readline-sync')
let palavra = rs.question('Digite um nome ').toUpperCase()



console.log(`A terceira letra no nome é: ${palavra.charAt(2)}`)