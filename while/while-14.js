// 14.Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
// qual é a menor idade.

// var user = require('readline-sync')
// var id1 = user.questionInt('(1) Digite a sua idade ')
// var id2 = user.questionInt('(2) Digite a sua idade ')
// var id3 = user.questionInt('(3) Digite a sua idade ')
// var id4 = user.questionInt('(4) Digite a sua idade ')
// var id5 = user.questionInt('(5) Digite a sua idade ')

// if(id1 < id2 && id1 <id3 && id1 <id4 && id1 <id5){
//     console.log('A idade menor é a primeira inserida', id1)
// } else if (id2 < id1 && id2 <id3 && id2 <id4 && id2 <id5){
//     console.log('A idade menor é segunda inserida', id2)
// } else if (id3 < id1 && id3 <id2 && id3 <id4 && id3 <id5){
//     console.log('A idade menor é terceira inserida', id3)
// }else if (id4 < id1 && id4 <id2 && id4 <id3 && id4 <id5){
//     console.log('A idade menor é quarta inserida', id4)
// }else if (id5 < id1 && id5 <id2 && id5 <id3 && id5 <id4){
//     console.log('A idade menor é quinta inserida', id5)
// }


//ESTUDAR =========================================================

var user = require('readline-sync');
var x = 0
var num = user.question("Insira uma idade: ")
var num1 = num;

while (x < 7){
    var num = user.question("Insira uma idade: ")    
    if(num <= num1){
        num1 = num;
    }
    x++
}console.log("A menor idade é : " + num1)