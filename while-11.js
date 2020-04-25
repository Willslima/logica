// 11. Escreva um programa que pergunta um número ao usuário, e mostra sua tabuada
// completa (de 1 até 10).
// EX.: 5
// 5x1 = 5, 5x2 = 10, 5x3=15, 5x4=20, 5x5=25, 5x6 = 30, 5x7 = 35, 5x8 = 40, 5x9 = 45,
// 5x10 = 50

console.log('Bem vindo à sua tabuada')

var user = require('readline-sync')
var num1= user.questionInt('Digite um número ')

var x = 0

while(x < 10){
    x++
    x = x 
    console.log(num1,'x',x,'=',num1*x)
    
}