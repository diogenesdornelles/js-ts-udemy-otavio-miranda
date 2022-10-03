/**
 * Aritméticos 
 * + - Adição e concatenação
 * - - Subtração
 * * - Multiplicação
 * / - Divisão
 * ** - Potenciação
 * % - mod ou resto da divisão
 *  */ 

let contador = 1;
contador++; // Operador de incremento. Soma ele mesmo duas vezes. Se posterior, chama a própria constante primeiro.
++contador; // Se anterior, executa primeiro a operação.
console.log(contador);

let contador2 = 10;
--contador2; // Operador de decremento.
console.log(contador2);

let contador3 = 0;
contador3 += 5; // Como python. Serve para qualquer operador.
contador3 += 5;
contador3 += 5;
console.log(contador3);

const num1 = 1;
const num2 = parseInt('2'); // Converte tipos. parseFloat etc
const num3 = parseFloat('3.2'); //
const num4 = Number('4.5'); //
console.log(num1 + num2);
