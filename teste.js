class pessoa {
    constructor(nome, sobrenome, cor) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.cor = cor
    }


    fazendo() {
        console.log(`${this.nome} andou bastante hoje`)
    }

    comendo() {
        console.log(`Agora ${this.nome} está comendo`)
    }
}

var eu = new pessoa('Willian', 'Santos', 'Branco')

console.log(eu)
eu.fazendo()
eu.comendo()