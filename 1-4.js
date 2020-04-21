var maca = require('readline-sync')
var compra = maca.question('Digite a quantidade de macas compradas ')
var varejo = 0.30
var atacado = 0.25



function calculo(compra,varejo,atacado){
    if(compra <= 12) {
        return compra * varejo;

    } else if (compra > 13) {
        compra * atacado
    } else {
        console.log('Não foi possivel calcular')
    }
}

console.log('Voce comprou '+ compra + ' macas e gastou um total de R$' + calculo(compra,varejo,atacado))

//bug no resultado em atacado