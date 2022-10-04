let num1 = 1;

let num2 = 2.5;

let num3 = 3.1515484111954111;

let num4 = 4;

let num5 = 5;

let num6 = 0.7;

let num7 = 0.1;

num6 += num7;
num6 += num7;
num6 += num7;

console.log(num1.toString() + num2); // se qualquer um dos números for str, contatena com sinal de +.

num1 = num1.toString(); // cnverte para string.

num1 = num1.toString(2); // converte para representação binária.

num3 = num3.toFixed(2); // arredonda duas casas

console.log(Number.isInteger(num4)); // retorna true ou false

num5 = num5 * '5'; // Não concatena = NaN

console.log(Number.isNaN(num5)); // retorna true se inválida ou false se correta

console.log(num6); // JS adota padrão IEEE 754-2008. Retorna um valor impreciso 0.999999...
console.log(Number.isInteger(num6));
num6 = parseFloat(num6.toFixed(2)); // Filtra a imprecisão: Number(num6.toFixed(2))
console.log(Number.isInteger(num6));