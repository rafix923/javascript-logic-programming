/* Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma: 
1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y. */

let num1 = Number(prompt("Digite um número qualquer"));
let num2 = Number(prompt("Digite outro número qualquer"));

const sum = num1 + num2;
console.log('1. O primeiro número somado ao segundo número resulta em:', sum);

const mult = num1 * num2;
console.log('2. O primeiro número multiplicado pelo segundo número resulta em:', mult);