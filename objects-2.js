// Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro
// em formato JSON.
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
// métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’

var rs = require('readline-sync')
var fs = require('fs')
var cor = rs.question('Digite a cor do carro: ')
var modelo = rs.question('Digite o modelo do carro: ')
var marca = rs.question('Digite a marca do carro: ')

var car = {}
car.cor = cor
car.modelo = modelo
car.marca = marca
console.log(car)

var carSerializado = JSON.stringify(car) //serializando o objeto
var destinoCar = 'objetos/carros.json' //destino do arquivo
fs.writeFileSync(destinoCar, carSerializado) //escrevendo o arquivo

console.log(carSerializado)