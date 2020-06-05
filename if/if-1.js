var idade = require('readline-sync')

var votacao = idade.question ('Digite o ano do seu nascimento ')
var anoAtual = 2020

if((anoAtual-votacao) <=17){
    console.log('Você não pode votar ainda, sua idade é de apenas '+ (anoAtual-votacao) + ' anos')
} else { console.log('O seu voto é obrigatório ')}

console.log('Jamais anule o seu voto se o mesmo for obrigatório!')