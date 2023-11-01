/* Exercícios de escrita de código 1 de 4

Faça um programa que: */

// a) Pergunte a idade do usuário
const userAgeInput = Number(prompt("Qual a sua idade?"))

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let userFriendAgeInput = Number(prompt("Qual a idade do seu melhor amigo ou amiga?"))

// c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
if (userAgeInput > userFriendAgeInput) {
    console.log("Sua idade é maior do que a do seu melhor amigo?", true);
} else if (userAgeInput <= userFriendAgeInput) {
    console.log("Sua idade é maior do que a do seu melhor amigo?", false);
} else {
    console.log("Os valores digitados não são válidos. Por favor digite apenas números")
};

// d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)
const ageDifferenceCalculation = userAgeInput - userFriendAgeInput;
if (ageDifferenceCalculation < 0) {
    console.log(`A diferença entre as idades dos dois é ${Math.abs(ageDifferenceCalculation)}`);
} else {
    console.log(`A diferença entre as idades dos dois é ${ageDifferenceCalculation}`)
};