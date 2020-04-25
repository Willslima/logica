// 13.Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
// a soma dos pares
// EX: valores fornecidos 1,2,3,4,5
// Impares -> 1 * 3 * 5 = 15
// Pares -> 2 = 4 = 6
// O programa imprime :
// Produtos dos impares : 15
// Soma dos pares : 6

var user = require('readline-sync')

var num1 = user.questionInt('Digite um número')
// var num2 = user.questionInt('Digite um número')
// var num3 = user.questionInt('Digite um número')
// var num4 = user.questionInt('Digite um número')
// var num5 = user.questionInt('Digite um número')

var par1, par2, par3, par4, par5, imp1, imp2, imp3, imp4, imp5;


while (true) {
    if(num1 %2 != 1){
    par1 = num1 
    console.log('Num 1 é par', par1)
    break
}   else if(num1%2 != 0){
    imp1 = num1
    console.log('Num 1 é impar', imp1)
    break
}
} console.log('tudo ok', imp1,par1)