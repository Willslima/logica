/*(OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
e 100. 

O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. 

Entretanto, caso o número seja divisível por 7, o programa deve ao invés disso imprimir a palavra “Ping”. 
Caso o número seja divisível por 5, o programa deve imprimir “Pong”. 

Caso o número seja divisível por 7 e 5, o programa deveria imprimir a mensagem “Ping Pong”. 

Dica: Neste exercício vocês talvez precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro.*/


var rs = require('readline-sync')
var numero1 = rs.questionInt ('Digite um número de 1 a 100. ')
var numero2 = rs.questionInt('Digite outro número de 1 a 100. ')

// console.log(numero1 + numero2)

var maior = 0
var menor = 0

if(numero1 > numero2){
    maior = numero1
    menor = numero2
} else {
    maior = numero2
    menor = numero1
} 

// console.log(menor, maior)

while (menor <= maior){
    // console.log(menor)
    if ( menor % 5 == 0 && menor % 7 == 0){
        console.log(menor + ' PING PONG') 
   } else if ( menor % 5 == 0){
       console.log(menor + ' PONG')
   } else if ( menor % 7 == 0){
       console.log(menor + ' PING')
   }
 menor ++
}



