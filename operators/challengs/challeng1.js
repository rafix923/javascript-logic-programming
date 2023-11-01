/* Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura
entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32 */

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
const fahrenheitToKelvin = (77 - 32) * (5 / 9) + 273.15;
console.log(`a. 77 °F em Kelvin é igual a ${fahrenheitToKelvin} K`);

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
const celsiusToFahrenheitV1 = (80 * 9 / 5) + 32;
console.log(`b. 80 °C em Fahrenheit é igual a ${celsiusToFahrenheitV1} °F`);

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
const celsiusToFahrenheitV2 = (30 * 9 / 5) + 32;
console.log(`c. 30 °C em Fahrenheit é igual a ${celsiusToFahrenheitV2} °F`);

const celsiusToKelvinV1 = 30 + 273.15;
console.log(`c. 30 °C em Kelvin é igual a ${celsiusToKelvinV1} K`);

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
const askUserInput = Number(prompt("Digite o valor que você deseja que eu converta de °C para °F e Kelvin"));

const celsiusToFahrenheitV3 = (askUserInput * 9 / 5) + 32;
console.log(`d. ${askUserInput} °C em Fahrenheit é igual a ${celsiusToFahrenheitV3} °F`);

const celsiusToKelvinV2 = askUserInput + 273.15;
console.log(`d. ${askUserInput} °C em Kelvin é igual a ${celsiusToKelvinV2} K`);
