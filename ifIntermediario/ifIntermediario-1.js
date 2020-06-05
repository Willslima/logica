// Faça um programa que leia o valor de um produto X e leia a quantidade de reais
// de um cofrinho que contenha:
// a. N moedas de 1 real;
// b. N moedas de 50 centavos;
// c. N moedas de 25 centavos;
// d. N moedas de 10 centavos;
// e. N moedas de 5 centavos;
// f. N moedas de 1 centavos.
// O programa deverá verificar se o total de reais que contém no cofrinho é o
// bastante para compra o produto X e imprimir se possui ou não valor suficiente

var user = require('readline-sync')

var real = user.questionInt('Digite a quantidade de moedas de 1 real ') //567
var cinquenta = user.questionInt('Digite a quantidade de moedas de 0,50 centavos ') //85 42,50
var vinteCinco = user.questionInt('Digite a quantidade de moedas de 0,25 centavos ') //90 22,50
var dez = user.questionInt('Digite a quantidade de moedas de 0,10 centavos ') //37 3,70
var cinco = user.questionInt('Digite a quantidade de moedas de 0,05 centavos ') //100 5,00
var um = user.questionInt('Digite a quantidade de moedas de 0,01 centavo ') //100 1,00
var valorProduto = user.questionFloat('Digite o valor do produto que gostaria de comprar ')


real = real * 1
cinquenta = cinquenta * 0.50
vinteCinco = vinteCinco * 0.25
dez = dez * 0.10
cinco = cinco * 0.05
um = um * 0.01


var cofrinho = real + cinquenta + vinteCinco + dez + cinco + um

if(valorProduto < cofrinho){
    console.log('O seu produto custa R$ ' + valorProduto + ' voce tem R$ ' + cofrinho + '\n Parabens pela compra, sobrou R$ ' + (cofrinho-valorProduto) + ' para voce gastar.')
} else if (valorProduto>cofrinho){
    console.log('Infelizmente suas economias nao deram para comprar o produto.')
}

