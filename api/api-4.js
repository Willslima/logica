// (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020

const axios = require('axios')
const rs = require('readline-sync')
let CEP = rs.question('Digite o CEP a ser consultado: ')

axios.get(`https://api.postmon.com.br/v1/cep/${CEP}`)
    .then(CEP => {
        const {bairro, cidade, logradouro, cep, estado} = CEP.data
        console.log(logradouro, bairro, cep, estado, cidade)
    })
    .catch(erro => console.log(`Esse cep não existe, informe um cep válido.${erro}`))