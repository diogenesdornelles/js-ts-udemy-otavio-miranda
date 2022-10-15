let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3];
[a, b, c] = numeros;
console.log(a, b, c);

// Atribuição via desestruturação (Arrays);
// ...rest operator (empacotar) e ... spread operator (desempacotar);
// desprezar um valor ', ,', por espaço vazio;

const numeros_1 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [firstNumber, , thirdNumber, ...rest] = numeros_1;
console.log(firstNumber, thirdNumber, rest);

const numeros_3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros_3;
console.log(lista3[2]);
