// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

const axios = require('axios')


axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then((result) => console.log(result.data))
.catch((error) => console.log(error))