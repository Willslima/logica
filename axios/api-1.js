// (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não

const axios = require('axios')
const rs = require ('readline-sync')
let perg = rs.question('Digite "yes" ou "no" ')


axios.get('https://yesno.wtf/api')
.then ((gerado) => {
    var gerado = gerado.data.answer
    if(perg == gerado){
        console.log(`A resposta está correta`)
    } else (console.log(`Você erroooooou `))
})
.catch((erro) => console.log(erro))