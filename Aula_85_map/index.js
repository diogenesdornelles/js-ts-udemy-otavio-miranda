// Map -> altera valores do array.
// retorna um array do mesmo tamanho.
// funciona de forma similar, com função de callback.
// retorna o próprio valor modificado (e não um boolean).

let newArray = new Array('1', '2', '17', '3', '15', '4', '0', '5', '50', '6', '45', '7', '25', '8', '11');

console.log('############ DOBRAR ###############');

let dobro = newArray.map(valor => valor * 2);
console.log(dobro);

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

let nome = pessoas.map(valor => valor.nome);
console.log(nome);

let idade = pessoas.map(function(valor) {
  return ({idade: valor.idade});
  });
console.log(idade);

let id = pessoas.map(function(valor, indice) {
  const newObj = {...valor};
  newObj.id = indice;
  return newObj;
  });
console.log(id);
