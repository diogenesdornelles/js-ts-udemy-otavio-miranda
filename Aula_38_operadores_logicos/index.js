/**
 * Operadores lógicos:
 * && -> AND -> E: Todas as expressões precisam ser verdadeiras.
 * || -> OR -> OU: Ao menos uma expressão deve ser veradeira.
 * ! -> NOT -> NÃO: 
 */

console.log(true && true); // retorna true, pois ambas as expressões são verdadeiras.
console.log(false && true); // retorna false, pois uma expressão é falsa.
console.log(false && false); // retorna false, pois ambas as expressões são falsas.

console.log(true || true); // retorna true, pois ambas expressões são verdadeiras.
console.log(false || true); // retorna true, pois ao menos uma das expressões é verdadeira.
console.log(false || false); // retorna false, pois ambas as expressões são falsas.

console.log(!(true || true)); // retorna false, pois a expressão verdadeira foi negada

const user = 'Jojo'; // from form
const senha = '1234'; // from form

const userDB = 'Jojo'; // from DB
const senhaDB = '1234'; // from DB

const checked = userDB === user && senhaDB === senha;

console.log(checked);


