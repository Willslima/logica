// Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a
// tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// N x N = N2
// Após isso solicite o usuário um número e forneça o argumento do usuário para a
// função.



var rs = require('readline-sync')
var num = rs.questionInt('Digite um número: ')
var tab = 1

function cacl () {
    for (tab = 1;tab <= num; tab++) {
       var CalcTab = tab * num
        console.log(`${tab} x ${num} = ${CalcTab}`)
        


    }
}

cacl()

