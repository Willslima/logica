// (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

const axios = require('axios')
const rs = require('readline-sync')
let ep = rs.question('Digite o episódio desejado: ')

axios.get(`https://www.breakingbadapi.com/api/episodes/${ep}`)
    .then(resp => {
        const { characters, season } = resp.data[0]
        console.log(`Os personagens são: ${characters},\n da temporada ${season}`)
})
    .catch((erro) => erro = console.log(`Infelizmente esse episódio não existe. Tente novamente.`))