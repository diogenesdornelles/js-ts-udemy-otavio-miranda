// Concatenação com operador concat

let array1 = new Array('1', '3');
let array2 = new Array('2', '4');
let array3 = array1.concat(array2, ['6', '5']);
console.log(array3.sort()); // [ '1', '2', '3', '4' ]

// Concatenação com spread operator

array1 = new Array('1', '3');
array2 = new Array('2', '4');
let array4 = [...array1, ...array2, ...['6', '5']].sort(); // espalhar valores.

console.log(array4);
