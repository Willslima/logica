// 10. Faça um algoritmo que receba um número e imprima todos seus divisores.
// EX : usuário informou 21
// O algoritmo imprime :
// 1
// 3
// 7
// 21
// DICA: Você pode precisar usar a operação de módulo (a%b)

var user = require('readline-sync')

var num = user.question("Qual o numero: ")
var divisor = 0;

while(divisor >= 0)
{
    if(num % divisor == 0 )
    {
        console.log(divisor)
    }
    divisor = divisor +1;
    
}