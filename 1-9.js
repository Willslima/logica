// 9. Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
// triângulo é Acutângulo, Retângulo ou Obtusângulo.
// Sendo que:
// − Triângulo Retângulo: possui um ângulo reto. (igual a 90o)
// − Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90o)
// − Triângulo Acutângulo: possui três ângulos agudos. (menor que 90o)

var user = require("readline-sync");

var ang1 = user.question("Digite o Angulo: ")
var ang2 = user.question("Digite o segundo Angulo: ")
var ang3 = user.question("Digite o terceiro Angulo: ")

if(ang1 == 90 || ang2 == 90 || ang3 == 90){
    console.log(' Triangulo Retangulo')
}else if(ang1 > 90 || ang2 > 90 || ang3 > 90){
    console.log(' Triângulo Obtusangulo')
}else{
    console.log(' Triângulo Acutangulo')
}