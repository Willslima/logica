var median = require('median')
var rs = require('readline-sync')

var notas = []

console.log('Digite as notas: ')
for( var i =0 ; i < 4; i ++){
    var nota = rs.questionInt('> ')
    notas.push(nota)
}

console.log(notas)

var mediaCalculada = median(notas)
console.log('A média é: ' + mediaCalculada)