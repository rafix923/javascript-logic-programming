/* Exercícios de interpretação de código 1 de 3

Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.*/

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // -> a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // -> b. false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) // -> c. true

console.log("d. ", typeof resultado) // -> d. boolean