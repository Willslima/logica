const axios = require('axios')

axios.get('https://viacep.com.br/ws/02879050/json/')
.then(resposta => console.log(resposta))
.catch()

//then resposta de sucesso
//catch resposta de erro

