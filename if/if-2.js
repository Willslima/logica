

var numero = require('readline-sync')
var n = numero.question('digite um numero ')
var resto = n % 2;

if (resto == 0) {
    console.log(n + " par");
} else {
    console.log(n + " impar");
}
console.log(resto)