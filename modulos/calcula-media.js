var rs = require('readline-sync')


function calculaMedia() {
    var media = []

    for (var i = 0; i < 3; i++) {
        var m = []
        m = rs.questionInt('Digite um número: ')
        media.push(m)
    }

    var mediaDeTodos = 0
    mediaDeTodos = mediaDeTodos + (media[0] / media.length)
    mediaDeTodos = mediaDeTodos + (media[1] / media.length)
    mediaDeTodos = mediaDeTodos + (media[2] / media.length)

    console.log(`A média é: ${mediaDeTodos}`)
    return calculaMedia
}



/*********************************************/

class Aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

function cadastraAluno() {
    var Alunos = []
    var cont = rs.questionInt('Quantos Alunos deseja cadastrar? ')

    for (var i = 0; i < cont; i++) {
        Alunos.push(PrimeiroAluno())
    }
    return Alunos
}


function PrimeiroAluno() {
    var Aluno1 = new Aluno(
        this.nome = rs.question('Insira o nome do Aluno: '),
        this.idade = rs.questionInt('Insira a idade do aluno: '),
    )

    return Aluno1
}

exports.calculaMedia = calculaMedia
exports.cadastraAluno = cadastraAluno
exports.PrimeiroAluno = PrimeiroAluno
    