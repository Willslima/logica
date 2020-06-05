// Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
// potente que o valor informado.
// Para isso utiliza a propriedade “Horserpower” do cars.json
// DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
// google.

var fs = require ('fs')
var rs = require('readline-sync')
var json = fs.readFileSync('./objetos/cars.json')
var cars = JSON.parse(json)
// console.log(cars[0]) Mostra o carro da posição 0 do array

var potenciaMinima = rs.questionInt('Digite uma potencia minima: ')

var carrosComPotenciaMinima = cars.filter( (carro) => carro.Horserpower >= potenciaMinima )

console.log(carrosComPotenciaMinima.length)