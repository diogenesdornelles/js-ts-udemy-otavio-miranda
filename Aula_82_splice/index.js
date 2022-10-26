let newArray = new Array('1', '2', '3', '4', '5', '6', '7', '8');

// newArray.splice(arg1, arg2, arg3); 
// primeiro arg1: primeiro índice pelo qual começa a operação.
// segundo arg2: quantos elementos quer remover do array
// terceiro arg3: elementos a adicionar. podem ser vários (...args) separados por vírgulas.

console.log('############ SIMULAR POP ###############');
let removidos = newArray.splice(-1, 1); // remover último elemento. retorna um array com os elementos dropados
console.log(newArray, removidos);
removidos = newArray.splice(-2, 2); // remover dois últimos elementos. 
console.log(newArray, removidos);
removidos = newArray.splice(2, 2); // remover dois últimos elementos. 
console.log(newArray, removidos); // remover dois elementos a partir do index 2. 
newArray = new Array('1', '2', '3', '4', '5', '6', '7', '8');
console.log('############ Number.MAX_VALUE ###############');
removidos = newArray.splice(-2, Number.MAX_VALUE); // remove maior quantidade possível a partir de um índice.
console.log(newArray, removidos);
console.log('############ QTN 0 E SUBSTITUIÇÃO ###############');
removidos = newArray.splice(-2, 0, 1000); // insere antes do índice informado (-3).
console.log(newArray, removidos);
removidos = newArray.splice(3, 2, 5000, 30000); // substitui valor do índice em duas quantidades e adiciona dois valores.
console.log(newArray, removidos);
newArray = new Array('1', '2', '3', '4', '5', '6', '7', '8');
console.log('############ SIMULAR SHIFT ###############');
removidos = newArray.splice(0, 1); // remover último elemento. retorna um array com os elementos dropados
console.log(newArray, removidos);
console.log('############ SIMULAR PUSH ###############');
removidos = newArray.splice(newArray.length, 0, '9'); // remover último elemento. retorna um array com os elementos dropados
console.log(newArray, removidos);
console.log('############ SIMULAR UNSHIFT ###############');
removidos = newArray.splice(0, 0, '1'); // remover último elemento. retorna um array com os elementos dropados
console.log(newArray, removidos);
