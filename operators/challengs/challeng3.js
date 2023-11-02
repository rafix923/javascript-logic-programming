/* Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa.
Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb).
Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes,
há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede: */

// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.
// Imprima  a resposta no console da seguinte forma: 20lb equivalem a X kg.

let pounds = 20;
const convertPoundsToKg = pounds / 2.2046;
console.log("a. 20lb equivalem a " + convertPoundsToKg.toFixed(2) + "kg");

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.
// Imprima  a resposta no console da seguinte forma: 10.5oz equivalem a X kg.

let oz = 10.5;
const convertOzToKg = oz / 35.273962;
console.log("b. 10.5oz equivalem a " + convertOzToKg.toFixed(2) + "kg");

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
// Imprima  a resposta no console da seguinte forma: 100mi equivalem a X m.

let miles = 100;
const convertMilesToMeters = miles * 1609.344;
console.log("c. 100mi equivalem a " + convertMilesToMeters + "m");

// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.
// Imprima  a resposta no console da seguinte forma: 50ft equivalem a X m.

let foot = 50;
const convertFootToMeters = foot / 3.2808399;
console.log("d. 50ft equivalem a " + convertFootToMeters.toFixed(2) + "m");

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.
// Imprima  a resposta no console da seguinte forma: 103.56gal equivalem a X l

let gallon = 103.56;
const convertGallonToLitter = gallon * 4.546092;
console.log("e. 103.56gal equivalem a " + convertGallonToLitter.toFixed(2) + "l");

// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.
// Imprima  a resposta no console da seguinte forma: 450 xic equivalem a X l

let xc = 450;
const convertXcToLitter = xc * 0.24;
console.log("f. 450xic equivalem a " + convertXcToLitter + "l");

// g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

let xcUserInput = Number(prompt("Informe o valor que deseja converter para litros"));
const litter = xcUserInput * 0.24;
console.log(`g. ${xcUserInput} xic equivalem a ${litter}l`);