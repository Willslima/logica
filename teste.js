// class pessoa {
//     constructor(nome, sobrenome, cor) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.cor = cor
//     }


//     fazendo() {
//         console.log(`${this.nome} andou bastante hoje`)
//     }

//     comendo() {
//         console.log(`Agora ${this.nome} está comendo`)
//     }
// }

// var eu = new pessoa('Willian', 'Santos', 'Branco')

// console.log(eu)
// eu.fazendo()
// eu.comendo()

// get getnome(){
//     //pegar nome
// }

// set setnome(){
//     //para setar dados com = 'dado'
// }

class Carro {
    constructor(nome,cor){
        this.name = nome
        this.cor = cor
    }
}
var corola = new Carro('Toyota Corola', 'branco')
var civic = new Carro('Honda Civic', 'cinza')
if(corola.cor === civic.cor){
    console.log('São da mesma cor')
}else{
    console.log('são de cores diferentes')
}