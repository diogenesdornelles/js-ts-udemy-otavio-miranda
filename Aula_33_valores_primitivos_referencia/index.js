/**
 * Valor primitivo (imutáveis):
 * str, number, bool, undefined, null, bigint, symbol.
 * 
 * Valor por referencia (mutáveis):
 *  array, object, function.
 */

// ARRAYS

let nome = 'Hennique';
nome[0] = 'R'; // Não causa erro assignment not possible! 
console.log(nome[0]);

let a = [1, 2, 3];
let b = a; // Apontam para o mesmo local na memória.
let c = [...a] // Spread (shallow copy) de 'a'.
console.log(a, b);

a.push(4); // Acresce em 'b' também.
console.log(a, b);
console.log(c); // Permanece o mesmo.

b.pop(); // Remove de 'a' também.
console.log(a, b);

// OBJECTS

const pessoa1 = {
  nome: 'luiz',
  sobrenome: 'silva',
};

const pessoa2 = pessoa1;

const pessoa3 = {...pessoa1}; // copy

pessoa1.nome = 'dio';

console.log(pessoa1, pessoa2, pessoa3);
