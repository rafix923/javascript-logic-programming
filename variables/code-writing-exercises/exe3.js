/* Exercícios de escrita de código 3 de 3

Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

let a = 10
let b = 25

Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`.
Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10. */

let a = 10;
let b = 25;

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10

/* Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, 
independente de qual valor essas variáveis assumam inicialmente 
(ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). */

a = 10;
b = 25;
c = a;
a = b;
b = c;

console.log("O novo valor de a é", a) // -> O novo valor de a é 25
console.log("O novo valor de b é", b) // -> O novo valor de b é 10

