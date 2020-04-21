var senha = 1234

var usuario = require('readline-sync')
var senhaDig = usuario.question('Digite a senha ')

if(senhaDig == senha){
    console.log('ACESSO PERMITIDO ')
} else {
    console.log('SENHA INCORRETA !!! ')
} 