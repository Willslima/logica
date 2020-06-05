// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
// entre
// estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:
// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média:5.7

var rs = require('readline-sync')


//Nota A 30%
//Nota B 70%

//Nome do aluno + nota 

var n1 = 3, n2 = 7, cont = 1


for(var media = 0; cont <= 5; cont ++ ){
    let n1 = rs.questionInt('Digite a primeira nota ')
    let n2 = rs.questionInt('Digite a segunda nota ')
    let nomeAluno = rs.question('Digite o nome e sobrenome do Aluno ')

        media = (n1*3)+(n2*7)
        media = media/10

            console.log('O aluno ', nomeAluno + ' tem uma média: ',media)
    }
    
