// Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk

var chalk = require('chalk')

var senha = 1234

var usuario = require('readline-sync')
var senhaDig = usuario.question('Digite a senha ')

if(senhaDig == senha){
    console.log(chalk.green`ACESSO PERMITIDO `)
} else {
    console.log(chalk.red`SENHA INCORRETA !!! `)
} 