//JS permite mandar argumentos sem parâmetros definidos na função. Os salva no objeto 'arguments'.

function funcao1() {
  console.log('Olá', arguments);
}

funcao1('valor', 1, 2, 3, true, null, NaN);
console.log('##########################'); 

function funcao2(v1, v2, v3) {
  console.log('Olá de novo', v1,v2,v3, arguments);
}

funcao2('valor', 1, 2, 3, true, null, NaN);

console.log('##########################'); 

// Se parâmetro for declarado, mas a função chamada sem argumento correspondente, retorna 'undefined'
function funcao3(v1, v2, v3, v4, v5, v6) {
  console.log('Olá de novo 2', v1, v2, v3, v4, v5, v6); //v5, v6 'undefined'
}

funcao3('valor', 1, 2, 3);

// Setando parâmetros por valor padrão

console.log('##########################'); 
function funcao4(a, b = 0, c = 0) {
  console.log(a + b + c); 
}

funcao4(1, 2, 3); 


console.log('##########################'); 
// desestruturação de dados em objeto
function funcao5({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade); 
}

funcao5({nome: 'jojo', sobrenome: 'costa', idade: '2'}); 
funcao5({nome: 'tato', sobrenome: 'costa', idade: '7'}); 

console.log('##########################'); 
// desestruturação de dados em objeto
function funcao6([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3); 
}

const familia = ['jojo', 'tato', 'elis']
funcao6(familia); 

console.log('##########################'); 

// With rest operator.

function funcao7(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros); 
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador); 
}

funcao7('*', 1, 1, 2, 3, 4, 5, 6); 


console.log('##########################'); 

// Convertendo para functions expression.

const funcao8 = function (operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros); 
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador); 
};

funcao8('*', 1, 1, 2, 3, 4, 5, 6); 

console.log('##########################'); 

// Convertendo para arrow function.

const funcao9 = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros); 
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador); 
};

funcao9('*', 1, 1, 2, 3, 4, 5, 6); 