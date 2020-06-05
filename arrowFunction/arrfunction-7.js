// Faça um algoritmo que solicite ao usuário A ou B
// Caso o usuário escolha A
// O algoritmo deve imprimir toda informação do carro com maior aceleração
// Caso o usuário escolha B
// O algoritmo deve imprimir toda informação do carro com maior potência
// Se houver mais de um carro imprimir todos 1 por 1.

var rs = require('readline-sync')
var opcao = rs.question('Digite A ou B. ')

var fs = require('fs')
var json = fs.readFileSync('./objetos/cars.json')
var cars = JSON.parse(json)

opcao = opcao.toUpperCase()

// console.log(opcao)

var maiorAceleracao = cars.filter((carro) => carro.Acceleration)
var maiorPotencia = cars.filter((carro) => carro.Horsepower)


var aceleracaoMaxima = 0
var potenciaMaxima = 0

if (opcao === 'A') {
    console.log(`Você escolheu a opção para ver a maior aceleração. `)
    
    //CALCULANDO A ACELERAÇÃO
    for (var i = 0; i < cars.length; i++) {
        let aceleracaoAtual = maiorAceleracao[i].Acceleration
        if (aceleracaoAtual > aceleracaoMaxima) {
            aceleracaoMaxima = aceleracaoAtual
        }
    }
    
    console.log(`A aceleração máxima é: ${aceleracaoMaxima}`)
    
    //COMPARANDO OS VALORES DE ACELERAÇÃO
    for (var i = 0; i < maiorAceleracao.length; i++) {
        if (aceleracaoMaxima == maiorAceleracao[i].Acceleration) {
            console.log('O carro de maior aceleração é: ', maiorAceleracao[i])
        }
    }
    
} else if (opcao === 'B') {
    console.log(`você escolheu a opção para ver a maior potência. `)
    
    //CALCULANDO A POTENCIA
    for (var i = 0; i < cars.length; i++) {
        let aceleracaoAtual = maiorAceleracao[i].Horsepower
        if (aceleracaoAtual > potenciaMaxima) {
            potenciaMaxima = aceleracaoAtual
        }
    }
    
    console.log(`A potencia máxima é: ${potenciaMaxima}`)
    
    
    // COMPARANDO OS VALORES DE POTENCIA
    for (var i = 0; i < maiorPotencia.length; i++) {
        if (potenciaMaxima == maiorPotencia[i].Horsepower) {
            console.log('O carro de maior potência é: ', maiorPotencia[i])
        }
    }

} else {
    console.log(`ERRO: TENTE NOVAMENTE. `)
}




