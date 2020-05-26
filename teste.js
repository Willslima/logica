// var alunos = []
// alunos.push({nome: 'goku', idade: 25 })
// alunos.push({nome: 'vegeta', idade: 18 })
// alunos.push({nome: 'piccolo', idade: 14 })

// var alunosFiltrados = alunos.filter((a) => a.idade > 18)
// alunosFiltrados.forEach((a) => console.log (`${a.nome} - ${a.idade}`))

var fs = require ('fs')
var rs = require('readline-sync')
var json = fs.readFileSync('./objetos/car.json')
var cars = JSON.parse
console.log(cars)