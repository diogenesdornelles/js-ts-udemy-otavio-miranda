// reduce.
// reduz array a um elemento.
// recebe função callback como primeiro argumento.
// segundo argumento valor inicial da acumulação.
// primeiro parâmetro o acumulador. (opcional)
// segundo o valor.
// terceiro o índice.
// quarto o array.

let newArray = new Array(1, 2, 17, 3, 15, 4, 0, 5, 50, 6, 45, 7, 25, 8, 11);

console.log('############ SOMAR ###############');

let soma = newArray.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador
}, 0); // valor inicial
console.log(soma);

console.log('############ PARES ###############');

let pares = newArray.reduce(function(acumulador, valor, indice, array) {
  if (valor % 2 === 0) {
    acumulador.push(valor);
  }
  return acumulador;
}, []);
console.log(pares);

console.log('############ DOBRO ###############');

let dobro = newArray.reduce(function(acumulador, valor, indice, array) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobro);

console.log('############ TESTES ###############');

let lista = [1, 2, 3]
let test = lista.reduce(function(total, value){
  total += value * 10; 
  return total;
}, 0); // se suprime argumento 0, acumulador passa a ser indice 0 do array.

console.log(test);
