// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

const axios = require('axios')


axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then((result) => {
        const { author, quote } = result.data[0]
        console.log(`Autor: ${author}, Frase ${quote}`)
    })
    .catch((error) => console.log(error))