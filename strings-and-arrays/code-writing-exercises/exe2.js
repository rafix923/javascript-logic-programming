/* Exercício 2 de 3 

Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
Em seguida, siga os passos: */

let favoriteDishes = ["feijoada", "macarronada", "pamonha", "pizza", "torta de chocolate com morango"];

// a) Imprima no console o array completo
console.log(favoriteDishes);

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
// seguida por cada uma das comidas, uma embaixo da outra.

const message = "Essas são as minhas comidas preferidas:";
console.log(message);
favoriteDishes.forEach(dishe => {
    console.log(dishe);
});

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
const userFavoriteDish = prompt("Qual sua comida favorita?");

// Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.
favoriteDishes[1] = userFavoriteDish;
console.log(favoriteDishes);


