// combinaçãoes

let newArray = new Array(1, 2, 3, 4);
let lista;

lista = newArray.filter( val => val %2 === 0 ).map( val => val * 2 ).reduce((acc, val) => acc + val, 0);
console.log(lista);