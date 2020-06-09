// Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
// palavra tem.
// EX : saúde

// 2 consoantes
// 3 vogais

let rs = require('readline-sync')
let palavra = rs.question('Digite uma palavra: ').toUpperCase()

let palavraSeparada = palavra.split('')

let vogais = ['A', 'E', 'I', 'O', 'U']
let consoantes = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']

let v = []
let c = []

for (var i = 0; i < palavraSeparada.length; i++) {
    if (vogais.includes(palavraSeparada[i]) == true) {
        v.push(palavraSeparada[i])
        // console.log(v.length)
    }
    else if (consoantes.includes(palavraSeparada[i]) == true) {
        c.push(palavraSeparada[i])
        // console.log(c.length)
    }
}
console.log(`Esta palavra tem ${v.length} vogais, e ${c.length} consoantes.`)
