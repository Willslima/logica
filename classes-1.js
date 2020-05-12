class Carro {
    constructor(marca, modelo, cor){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }
}

var rs = require('readline-sync')
var marca1 = rs.question('Marca 1: ')
var modelo1 = rs.question('Modelo 1: ')
var cor1 = rs.question('Cor 1: ')

var carro1 = new Carro(marca1, modelo1, cor1)
// console.log(carro1)

var marca2 = rs.question('Marca 2: ')
var modelo2 = rs.question('Modelo 2: ')
var cor2 = rs.question('Cor 2: ')

var carro2 = new Carro(marca2, modelo2, cor2)
// console.log(carro2)

function saoIguais(c1, c2){
    var mesmoModelo = c1.modelo == c2.modelo
    var mesmaMarca = c1.marca == c2.marca
    return mesmaMarca && mesmoModelo

}


console.log('São iguais:', saoIguais(carro1, carro2))