// Elabore um programa para testar se uma senha digitada é igual a “batatafrita”.
// Se a senha estiver correta escreva
// “Acesso permitido”,
// do contrário emita a mensagem
// “Você não tem acesso ao sistema”.

var user = require('readline-sync')
var senha = user.question('Digite a senha ')

if(senha != 'batatafrita'){
    console.log('Senha incorreta, tente novamente ')
} else {
    console.log('Acesso permitido')
}