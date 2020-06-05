// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
// essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
// utilizando a função criada.

function converteIdadeParaDias(idade){
    totalDias = idade.anos*365 + idade.meses*30 + idade.dias
    return totalDias
}

var rs = require ('readline-sync')

var velhice = {}
velhice.anos = rs.questionInt('Quantos anos você tem? ')
velhice.meses = rs.questionInt('Quantos meses? ')
velhice.dias = rs.questionInt('Quantos dias? ')

console.log(converteIdadeParaDias(velhice))