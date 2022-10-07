/**
 * Operadores lógicos:
 * && -> AND -> E: Todas as expressões precisam ser verdadeiras.
 * || -> OR -> OU: Ao menos uma expressão deve ser veradeira.
 * ! -> NOT -> NÃO: 
 * 
 * && -> false && true -> Como, de regra, todas as expressões devem ser verdadeiras, vai retornar o valor false "nele mesmo", caso exista ao menos um. Se não, retorna valor do último. Avaliação por curto-circuito. 
 * || -> true || false -> Vai retornar "o primeiro valor verdadeiro encontrado" nele mesmo.
 */

/**
 * Retorna valor da última expressão, se true. 
 * Caso exista uma expressão falsa, 
 * retorna sempre o primeiro valor false.
 * 
 * Se Number, 0;
 * Se Number, NaN;
 * Se string, '' "" ``;
 * Se bool, false (literal)
 * Se nonetype, null ou undefined
 * .*/

console.log('Ola' && 0 && NaN && true); // retorna 0.


// Avaliação em curto circuito com o operador AND
function falaOi () {
  return 'Ola';
}

const vaiExecutar = 'false';

console.log(vaiExecutar && falaOi());

// Avaliação em curto circuito com o operador OR

console.log(0 || "" || NaN || "jojo" || false);

const corUser = null;
const corPadrao = corUser || 'azul';

console.log(corPadrao);
