// Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o menos potente

var fs = require ('fs')
var json = fs.readFileSync ('./objetos/cars.json')
var cars = JSON.parse(json)

var menosPotente = cars.filter ( (carro) => carro.Horsepower)

console.log(menosPotente.length)

var potenciaMinima = 230 
for (var i = 0; i < menosPotente.length; i++){
    if( menosPotente[i].Horsepower < potenciaMinima){
        potenciaMinima = menosPotente[i].Horsepower
    }
    console.log(`Esta é a menor potência de todos os veiculos: ${potenciaMinima}`)
} 