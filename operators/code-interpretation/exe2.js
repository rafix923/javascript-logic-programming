/* Exercícios de interpretação de código 2 de 3

Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?*/

let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = primeiroNumero + segundoNumero;

console.log(soma)

// O problema é que o código acima está concatenando os inputs do usuário ao em vez de fazer a operação de soma.