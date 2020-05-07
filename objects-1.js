// Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
// objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema

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


