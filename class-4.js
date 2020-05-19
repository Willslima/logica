// 4. Criar uma função que receba uma coleção de alunos e calcule a média de idade

// Adicione uma nova função no arquivo calcula-media.js chamada
// calculaMediaIdadeAluno(alunos).

// A função deve receber um array da mesma classe dos alunos criada na atividade 2.

// Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.

// Adicione essa função para ser exportado pelo módulo.

// Adicione no final do programa da atividade 2 após informar o nome dos alunos com
// maior idade também imprimir a média de idade dos alunos utilizando o método
// calculaMediaIdadeAluno(alunos)var rs = require('readline-sync')

let rs = require('readline-sync')

let Alunos = []
let Idade = []

let nome = rs.question('Digite o nome do aluno: ')
let idade = rs.questionInt('Digite a idade do aluno: ')

class TodosAlunos {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

let PrimeiroAluno = new TodosAlunos (nome,idade)

Alunos.push(PrimeiroAluno.nome)
Idade.push(PrimeiroAluno.idade)

console.log(PrimeiroAluno)

console.log(Alunos,Idade)