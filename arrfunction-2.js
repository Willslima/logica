// Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
// cars.json
// O campo que define o país no cars.json é Origin
// A comparação da string pode ser utilizada usando a palavra “Japan”

// A resolução é similar ao exercício 1

var fs = require ('fs')
var json = fs.readFileSync('./objetos/cars.json')
var cars = JSON.parse(json)
// console.log(cars[0]) Mostra o carro da posição 0 do array


var OrigemCarro = cars.filter( (carro) => carro.Origin == 'Japan' )

console.log(OrigemCarro.length)