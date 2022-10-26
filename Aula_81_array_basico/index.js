const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log('############ ORIGINAL ###############');
console.log(nomes);
nomes[1] = 'Marta';
console.log('############ MODIFICAÇÃO ###############');
console.log(nomes);
delete nomes[1];
console.log('########### DELEÇÃO ################');
console.log(nomes);
console.log('########### CONSTRUTOR ################');
const newArray = new Array('1', '2', '3', '4', '5', '6', '7', '8');
console.log(newArray);
console.log('########### VALORES POR REFERÊNCIA ################');
const new1 = newArray;
new1.pop();
console.log(newArray); // método também é aplicado ao array original, pois apontam para o mesmo local na memória.
console.log('########### SPREAD ################');
const new2 = [...newArray]; // espalhamento. Deep copy.
new2.pop();
console.log(newArray); // Com espalhamento, método não é aplicado ao array original.
console.log('########### LENGHT ################');
console.log(newArray.length);
console.log('########### POP - REMOVER(final) ################');
const removido1 = newArray.pop(); // retorna o elemento removido.
console.log(newArray, removido1);
console.log('########### SHIFT - REMOVER(início e desloca índices) ################');
const removido2 = newArray.shift(); // retorna o elemento removido.
console.log(newArray, removido2);
console.log('########### PUSH - ADICIONA(ao final) ################');
newArray.push('7');
console.log(newArray);
console.log('########### UNSHIFT - ADICIONA(ao início) ################');
newArray.unshift('1');
console.log(newArray);
console.log('########### SLICE - FATIAR ################');
const fatiado1 = newArray.slice(1, 5); // Não seleciona o último índice (pára no 4)
console.log(newArray, fatiado1);
const fatiado2 = newArray.slice(0, -1); // Admite negativos, como python. Remove o último.
console.log(newArray, fatiado2);
console.log('########### CONVERTER STRING EM ARRAY ################');
const string1 = 'Diógenes Dornelles Costa';
const meuNome = string1.split(' ');
console.log(meuNome);
const frase = 'Hoje,   o , dia  ,  está,   bonito';
let fraseOnArray = frase.split(',');
let fraseOnArrayWithoutSpaces = [];
for (let value of fraseOnArray) {
  fraseOnArrayWithoutSpaces.push(value.trim());
};
console.log(fraseOnArrayWithoutSpaces);
console.log('########### UNIR EM STRING ################');
const newString = fraseOnArrayWithoutSpaces.join(' ');
console.log(newString);
