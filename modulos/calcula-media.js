var rs = require('readline-sync')

var media = []

function calculaMedia(){

    for(var i = 0; i < 3; i++){
        var m = []
        m = rs.questionInt('Digite um número: ')
        media.push(m)
    }

    var mediaDeTodos = 0
    mediaDeTodos = mediaDeTodos + (media[0]/media.length)
    mediaDeTodos = mediaDeTodos + (media[1]/media.length)
    mediaDeTodos = mediaDeTodos + (media[2]/media.length)

    console.log(mediaDeTodos)
    return calculaMedia
}
calculaMedia()

/*********************************************/

    // function x () { return console.log('Teste: eu sou outra função')}
    // x()
    
    
    exports = {calculaMedia}
