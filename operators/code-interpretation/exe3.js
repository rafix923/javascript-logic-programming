/* Exercícios de interpretação de código 3 de 3

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
*/

// Para o programa executar a soma dos dois números corretamente é necessário utilizar a classe 'Number'.
// Isso converterá as strings em números.

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;

console.log(soma)