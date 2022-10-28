// filter: filtrar o array.
// filter vai sempre retornar um array com a mesma quantidade elementos ou menos.
// Array.filter recebe como argumento uma função callback.
// A função callback recebe como parâmetros automaticamente valor, indice e array.
// A função callback retorna true ou false, ou seja, se o valor deve voltar.

let newArray = new Array('1', '2', '17', '3', '15', '4', '0', '5', '50', '6', '45', '7', '25', '8', '11');

console.log('############ RETORNAR NUMEROS > 10 FUNÇÃO POR DECLARAÇÃO ###############');

function callbackFilter (valor){
  //console.log(arguments['0']); // retorna valores
  //console.log(arguments['1']); // retorna índices
  return valor > 10;
}

let newArray2 = newArray.filter(callbackFilter);
console.log(newArray2);

console.log('############ RETORNAR NUMEROS < 15 ARROW FUNCTION ###############');

let newArray3 = newArray.filter(valor => valor < 15);
console.log(newArray3);

console.log('############ ARRAY COM OBJETOS ###############');

const pessoas = [
  {nome: 'luiz', idade: 62},
  {nome: 'jojo', idade: 2},
  {nome: 'elis', idade: 42},
  {nome: 'dio', idade: 37},
  {nome: 'otavio', idade: 7},
  {nome: 'aida', idade: 57},
  {nome: 'fer', idade: 21},
];

let cincoLetrasOuMais = pessoas.filter(valor => valor.nome.length >= 4);
console.log(cincoLetrasOuMais);

let cinquentaOuMais = pessoas.filter(valor => valor.idade >= 50);
console.log(cinquentaOuMais);

let terminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);
