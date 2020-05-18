var rs = require('readline-sync')

var media = []

function calculaMedia(){

    for(var i = 0; i < 3; i++){
        var m = []
        m = rs.questionInt('Digite um número: ')
        media.push(m)
    }

    var mediaDeTodos = 0
    mediaDeTodos = mediaDeTodos + (media[0]/media.length)
    mediaDeTodos = mediaDeTodos + (media[1]/media.length)
    mediaDeTodos = mediaDeTodos + (media[2]/media.length)

    console.log(mediaDeTodos)
    return calculaMedia
}
calculaMedia()

/*********************************************/

var maiorIdade = []
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
function cadastrarAluno() {
    var primeiroAluno = new Aluno(
        this.nome = rs.question('Insira o nome do aluno'),
        this.idade = rs.question('Insira a idade do aluno'),
        )
        return primeiroAluno;
    }
    for (var i = 0; i < 3; i++) {
        maiorIdade.push(cadastrarAluno())
    }
    console.log(maiorIdade)
    
    var maiorIdadeEntreTodos = 0
    for (var i = 0; i < maiorIdade.length; i++) {
        var idadeAtual = maiorIdade[i].idade
        if (idadeAtual > maiorIdadeEntreTodos) {
            maiorIdadeEntreTodos = idadeAtual
        }
    }
    console.log(maiorIdadeEntreTodos)
    for (var i = 0; i < maiorIdade.length; i++){
        if (maiorIdadeEntreTodos == maiorIdade[i].idade){
            console.log("o aluno de maior idade é", maiorIdade[i])
        }
    }
    
    
    
    
    function x () { return console.log('Teste: eu sou outra função')}
    x()
    
    
    exports = {calculaMedia, x}
