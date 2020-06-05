// Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
// transforme ela em maiúscula
// EX: abelha
// O algoritmo imprime
// AbelhA
// Dicas para esta atividade.
// Para selecionar 1 caracter da string utilizamos a função charAt :
// var nome = “oi”
// console.log(nome.charAt(0))
// console.log(nome.charAt(1))
// O algoritmo imprime:
// > o
// > i
// O número que colocamos dentro de charAt é a posição do caractere que queremos da
// string, porém o primeiro elemento é 0 e não 1.
// Sendo assim uma string de 2 elementos possui o elemento 0 e 1.
// Para cada charAt você deve concatenar isto numa string separada e exibir ela no final

let rs = require('readline-sync')

var option = ''

option = rs.question('Digite uma palavra: ')

var palavra = option.split('')
for (let i=0; i < option.length; i++){
    if(option.charAt(i)=== 'a'){
        palavra[i] = option.charAt(i).toUpperCase()

    }
}

console.log(palavra.join(''))
