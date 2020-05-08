// Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator

// var ageCalculator = require('age-calculator');
//   let {AgeFromDateString, AgeFromDate} = require('age-calculator');
 
//   // Be careful: Javascript months start at 0 (so zero stands for january)
 
//   let ageFromDate = new AgeFromDate(new Date(1987, 0, 8)).age;
//   console.log("value from AgeFromDate", ageFromDate);
//   // output: 30 (at the time of this doc)
 
//   let ageFromString = new AgeFromDateString('1987-01-08').age;
//   console.log("value from ageFromString", ageFromString);
//   // output: 30 (at the time of this doc)

var ageCalculator = require('age-calculator');
  var {AgeFromDateString, AgeFromDate} = require('age-calculator');
  var rs = require('readline-sync')
  var ano = rs.questionInt('Insira o seu ano de nascimento: ')
  var mes = rs.questionInt('Insira o seu mes de nascimento: ')
  var dia = rs.questionInt('Insira o seu dia de nascimento: ')

 mes = mes - 1 // no caso o modulo, janeiro começa no zero
  var calc_idade = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log(`A sua idade é ${calc_idade}`)