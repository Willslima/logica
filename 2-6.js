// Elabore um algoritmo que calcule o que deve ser pago por um produto,
// solicitando o preço da etiqueta do produto e a escolha da condição de
// pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
// pagamento escolhida e efetuar o cálculo adequado. Código Condição de
// pagamento
// - 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// - 2 À vista no cartão de crédito, recebe 15% de desconto
// - 3 Em duas vezes, preço normal de etiqueta sem juros
// - 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

var user = require('readline-sync')
var perg = user.question('Para pagamento digite o numero correspondente \n (1) A vista em dinheiro ou cheque, recebe 10% de desconto \n (2) A vista no cartao de credito, recebe 15% de desconto \n (3) Em duas vezes, preco normal de etiqueta sem juros \n (4) Em duas vezes, preco normal de etiqueta mais juros de 10% ')

if (perg > 4 || perg < 0){
    console.log('Digite um número válido')
    
}

var valor = user.question('Digite o valor do produto ')

if (perg == 1 ){
    valor = valor / 10
    valor = valor * 9 
    console.log('O valor a ser pago é R$' + valor)
} else if ( perg == 2){
    valor = valor / 100
    valor = valor * 85
    console.log('O valor a ser pago é R$' + valor)
} else if (perg == 3){
    console.log('O valor a ser pago é R$' + valor + ', em 2 parcelas de R$' + (valor/2))
}else if (perg == 4){
    valor = valor / 100
    valor = valor * 115
    console.log('O valor a ser pago é R$' + valor + ', em 2 parcelas de R$' + (valor/2))
} else (console.log('Digite uma opção válida'))