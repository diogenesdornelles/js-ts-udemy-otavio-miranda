/**
 * 'if' pode ser usado sozinho.
 * O operador lógico 'else' precisa de um 'if' antes.
 * É possível utilizar vários 'else if'
 * Somente é possível usar um 'else' ao final.
 */

const hora = 80;

if (hora <= 12) {
  console.log('Bom dia');
} else if (18 >= hora && hora > 12) {
  console.log('Boa tarde');
} else if (18 < hora && hora <= 24) {
  console.log('Boa Noite');
} else {
  console.log('Olá');
}
