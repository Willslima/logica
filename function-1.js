// Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
// volume (v = 4/3.pi.R³).
// Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.

var rs = require('readline-sync')
var valorRaio = rs.questionInt('Digite o valor do Raio para calcular o voluma da esfera. ')
function calculoVolume(raio){
    return 4/3*3.14* (raio**3)/3
}
console.log(calculoVolume(valorRaio))