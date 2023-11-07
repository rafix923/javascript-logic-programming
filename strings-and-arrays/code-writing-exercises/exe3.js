/* Exercício 3 de 3

Faça um programa, seguindo os passos: */

// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = [];

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const task1 = prompt("Qual foi a sua primeira tarefa do dia?");
const task2 = prompt("Qual foi a sua segunda tarefa do dia");
const task3 = prompt("Qual foi a sua terceira tarefa do dia?");
listaDeTarefas.push(task1, task2, task3).toString()

// c) Imprima o array no console
console.log(listaDeTarefas);

// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
const typeIndex = prompt("Digite um número de 0 a 2");

// e) Remova da lista o item de índice que o usuário escolheu.
const itemToRemove = typeIndex;
listaDeTarefas.splice(typeIndex, 1);

// f) Imprima o array no console
console.log(listaDeTarefas);