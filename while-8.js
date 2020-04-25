var user = require('readline-sync');

var ent = user.question("Insira uma palavra: ");
var tamanho = ent.length;
var x = 0
while(x < tamanho){
    console.log(ent[x++])
}