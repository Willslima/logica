// Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
// “Ford” na propriedade Car para realizar a contagem.

var fs = require ('fs')
var json = fs.readFileSync('./objetos/cars.json')
var cars = JSON.parse(json)

var carroFord = cars.filter( (carro) => carro.Car.includes('Ford') )

console.log(carroFord.length)