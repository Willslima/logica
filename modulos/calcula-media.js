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

    // function x () { return console.log('Teste: eu sou outra função')}
    // x()
    
    var Alunos = []
    var cont = rs.questionInt('Quantos Alunos deseja cadastrar? ')

    function cadastraAluno(){
    class Aluno{
        constructor(nome, idade){
            this.nome = nome
            this.idade = idade
        }
    }
    
    function PrimeiroAluno(){
        var Aluno1 = new Aluno(
            this.nome = rs.question('Insira o nome do Aluno: ')
            this.idade = rs.questionInt('Insira a idade do aluno: ')
        )

        return PrimeiroAluno
    }
    
}
    exports = {calculaMedia}
