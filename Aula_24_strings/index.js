let umaString = 'um texto pequeno que escrevi' //Pode usar caractere de escape \ backslash

console.log(umaString[4]); // str também são indexadas 01234...

console.log(umaString.replace(/e/g, 'E')); // métodos. Aceita regex. Flag g altera em todos.
console.log(umaString.charAt(5)); // retorna charac da posição informada.
console.log(umaString.split(' ', 2)); // retorna lista. Padrão retorna tudo. Podemos limitar com segundo parâmetro.
console.log(umaString.toUpperCase()); // para maiúsculas. Tem lower. Title. Etc.
console.log(umaString.search('t')); // encontra primeira ocorrência. Aceita regex.
console.log(umaString.length); // Attr retorna tamanho
console.log(umaString.concat(' em um lindo dia')); // concatena
console.log(umaString.indexOf('texto', 2)); // retorna index a partir de um index. Se não encontrar nada, -1.
console.log(umaString.lastIndexOf('texto')); // busca de trás para frente.
console.log(umaString.match(/[a-z]*/g)); // flag g retorna array. Aceita regex.
console.log(umaString.slice(2, 5)); // retorna fragmento pelos indexes. Admite negativo. Retorna último charac.
