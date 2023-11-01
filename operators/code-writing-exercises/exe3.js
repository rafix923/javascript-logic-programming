/* Exercícios de escrita de código 3 de 3

Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console: */

const ageInput = Number(prompt("Qual a sua idade atual?"))

// a) A idade do usuário em meses
const convertAgeToMonths = ageInput * 12;
console.log(`a. A idade do usuário após conversão é ${convertAgeToMonths} meses.`);

// b) A idade do usuário em dias
const convertAgeToDays = ageInput * 365;
console.log(`b. A idade do usuário após conversão é ${convertAgeToDays} dias.`);

// c) A idade do usuário em horas
const convertAgeToHours = convertAgeToDays * 24;
console.log(`c. A idade do usuário após conversão é ${convertAgeToHours} horas.`);