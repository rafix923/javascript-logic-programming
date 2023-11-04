/* Exercício 1 de 3

1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

const userName = prompt("Qual o seu nome?");
const userEmail = prompt("Qual o seu email?");

const message = `O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}!`;
console.log(message);
