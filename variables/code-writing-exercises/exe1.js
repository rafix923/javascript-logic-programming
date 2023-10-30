/* Exercícios de escrita de código 1 de 3

Construa um programa, seguindo os seguintes passos:*/

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.

var userName;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let userAge;

// c) Imprima no console o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof userName); // -> undefined
console.log(typeof userAge); // -> undefined

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// Resposta:  Para as suas variáveis foi impresso o valor 'undefined', devido a falta de atribuição de valores para elas.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

userName = prompt('Qual o seu nome?');
userAge = Number(prompt('Qual a sua idade?'))

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof userName); // -> string
console.log(typeof userAge); // -> number