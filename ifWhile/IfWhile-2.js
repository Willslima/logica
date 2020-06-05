var n1 = 1
var n2 = 50

while (n1 <= n2) {
    var ehPrimo = true
    var divisor = 2
    while (divisor < n1) {
        if (n1 % divisor == 0) {
            ehPrimo = false
        }
        divisor++
    }
//     if (ehPrimo) {
//         console.log(`${n1} é primo`)
//     }
//     if (n1 % 2 == 0) {
//         console.log(`${n1} é par`)
//     } else {
//         console.log(`${n1} é impar`)
//     }
//     n1++
// }

if (n1%2 == 0){
    if (ehPrimo){
        console.log(n1 + ' é par e é primo')
    } else { 
        console.log(n1 + ' é par')

    }
} else {
    if (ehPrimo){
        console.log(n1 + ' é impar e é primo')
    } else {
        console.log(n1 + ' é impar')
    }
}

n1++

}