function saudacao(nome) {
  return `Bom dia ${nome}`;
} 

const variavel = saudacao('Otávio');
console.log(variavel);

// ----------------------------------------------------------------
function sum(a, b) { // função declarada de forma padrão
  const result = a + b;
  return result;
}

const soma = sum(2, 3);
console.log(soma);

// ----------------------------------------------------------------
function subtraction(a=0, b=0) { // setando parâmetro padrão
  const result = a - b;
  return result;
}

const subtracao = subtraction(2, 3);
console.log(subtracao);

// ----------------------------------------------------------------
const raizq = function(n) {  // função anônima (lambda). 
  return n ** 0.5;
};

console.log(raizq(9));

// ----------------------------------------------------------------
const pot = n => n ** 2;   // arrow function. 

console.log(pot(9));


const multiplica = (n, p) => n * p;   // arrow function. 

console.log(multiplica(9, 10));

const media = (n, p) => { // arrow function. 
  return (n + p)/2;   
}

console.log(media(6, 8));