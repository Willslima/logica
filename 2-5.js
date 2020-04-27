// Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
// em reais a ser pago o novo valor a ser pago por essa residência com um
// desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade
// de kw gasto por residência.

//reais / kilowatts ? =
//quanto custa cada kilowatts = 1,49

//valor a ser pago da residencia com 10% de desconto 

//dado 100 kilowatts, custa 1/7 do salário minimo = 149,28
//quanto é o salário minimo ? = 1045,00


//inserir a quantidade de kilowatts gasto na casa

var user = require('readline-sync')
var utilizado = user.question('Digite quantos kilowatts foram utilizados ')
var kw = 1.49

if (utilizado != 0){
    kw = kw * utilizado
    kw = kw / 10
    kw = kw * 9
    console.log('O valor gasto em kilowatts foi, ' + utilizado + 'kw \n O valor a ser pago com 10% de desconto é R$' + kw)
}else {
    console.log('O valor informado não pode ser (0) zero.')
}


