/* Exercícios de interpretação de código 1 de 2

Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
1. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**..*/

let array
console.log('a. ', array) //-> a. undefined

array = null
console.log('b. ', array) //-> b. null 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //-> c. 11

let i = 0
console.log('d. ', array[i]) //-> d. 3

array[i + 1] = 19
console.log('e. ', array) //-> e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i + 6]
console.log('f. ', valor) //-> f. 9