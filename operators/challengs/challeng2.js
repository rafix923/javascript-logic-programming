/* Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo 
de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. 
Faça um programa que receba a quantidade de quilowatts consumida por uma residência. */

// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

let energyConsumption = 280;
let costPerKWH = 0.05;

const totalCost = energyConsumption * costPerKWH;
console.log("a. O custo da sua conta de energia do mês será de", totalCost.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumFractionDigits: 2,
}), "reais.");

/* b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto */

const discountPercentage = 15 / 100;
const valueAfterDiscount = totalCost - discountPercentage;
console.log("b. O custo da sua conta de energia com o desconto de 15% será de", valueAfterDiscount.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumFractionDigits: 2,
}), "reais.");
