/* Exercícios de escrita de código 4 de 4

Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

const num1 = Number(prompt("Digite um número qualquer"))
const num2 = Number(prompt("Digite outro número qualquer"))

const greaterThanCalculator = num1 > num2;
console.log("O primeiro número é maior que o segundo?", greaterThanCalculator);

const equalToCalculator = num1 === num2;
console.log("O primeiro número é igual ao segundo?", equalToCalculator);

const num1DivisibleByNum2 = num1 % num2 === 0;
console.log("O primeiro numero é divisível pelo segundo?", num1DivisibleByNum2)

const num2DivisibleByNum1 = num2 % num1 === 0;
console.log("O segundo numero é divisível pelo primeiro?", num2DivisibleByNum1)