/* Exercícios de escrita de código 2 de 3

Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:*/

const question1 = prompt("Você é desenvolvedor fullstack?")
const question2 = prompt("Você gosta de ser desenvolvedor fullstack?")
const question3 = prompt("Você pretende continuar estudanto e aprimorando suas habilidades?")

// a) Crie três novas variáveis, contendo as respostas

const answer1 = question1;
const answer2 = question2;
const answer3 = question3;

// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
// Você está usando uma roupa azul hoje? - SIM

window.alert(`Você é desenvolvedor fullstack? - ${answer1}`)
window.alert(`Você gosta de ser desenvolvedor fullstack?" - ${answer2}`)
window.alert(`Você pretende continuar estudanto e aprimorando suas habilidades? - ${answer3}`)