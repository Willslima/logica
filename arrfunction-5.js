// Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o mais potente

var fs = require ('fs')
var json = fs.readFileSync ('./objetos/cars.json')
var cars = JSON.parse(json)

var maisPotente = cars.filter ( (carro) => carro.Horsepower)

console.log(maisPotente.length)

var potenciaMaxima = 0
for (var i = 0; i < maisPotente.length; i++){
    if( maisPotente[i].Horsepower > potenciaMaxima){
        potenciaMaxima = maisPotente[i].Horsepower
    }
    console.log(`Esta é a maior potencia de todo os carros: ${potenciaMaxima}`)
} 
