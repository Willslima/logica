// Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é
// maiúscula ou não

// var user = require('readline-sync');
// var palavra = user.question("Insira a palavra!");
// var letra = palavra.charCodeAt(0);


// if(65>=letra<=90){
//     console.log("Sua letra e minuscula!");
// }else if(91>=letra<=122){
//     console.log("Sua letra e maiuscula!");
// }


var rs = require('readline-sync')
var texto = rs.question('Digite uma palavra ')
var letra = texto.charAt(0)

if (letra == letra.toUpperCase()){
    console.log('A primeira letra é maiuscula ')
} else (console.log('A primeira letra é minuscula '))