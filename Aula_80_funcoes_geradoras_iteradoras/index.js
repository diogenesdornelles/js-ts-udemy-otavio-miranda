// Lazy evaluation

console.log('############ GERADOR SIMPLES ###################')

function* getNum1() {  
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const n1 = getNum1();
console.log(n1.next().value);
console.log(n1.next().value);
console.log(n1.next().value);
console.log(n1.next().value);
console.log(n1.next().value); // último valor guardado
console.log(n1.next()); // { value: undefined, done: true }

console.log('########### CONTADOR INFINITO COM GERADOR ####################')
// contador infinito

function* getNum2() {  
  let i = 0;
  while(true){
    yield i;
    i++;
  }
}

const n2 = getNum2();
console.log(n2.next().value);
console.log(n2.next().value);
console.log(n2.next().value);

console.log('############# RETORNAR ITENS DE ARRAY ##################')

function* getNum3(array) {  
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const array = ['banana', 'pera', 'uva', 'abacaxi', 'melão'];
const n3 = getNum3(array);
for (let i = 0; i < array.length; i++) {
  console.log(n3.next().value)
}

console.log('############# DELEGAÇÃO DE FUNÇÕES ##################')

function* getNum4() {
  yield 0;
  yield 1;
  yield 2;
}  

function* getNum5() {
  yield* getNum4(); // delega para função getnum4 de 0 a 2
  yield 3;
  yield 4;
  yield 5;
}  

const n4 = getNum5();
for (let valor of n4) {
  console.log(valor);
}

console.log('############# GENERATOR ENTREGA FUNÇÕES ##################')

function* getFunctions() {
  yield function(){
    console.log('Sou o primeiro yield'); return 'returned 1';
  }
  yield function(){
    console.log('Sou o segundo yield'); return 'returned 2';
  }
  yield function(){
    console.log('Sou o terceiro yield'); return 'returned 3';
  }
  yield function(){
    console.log('Quarto e último'); return 'returned 4';
  }
}

const functions = getFunctions();
console.log(functions.next().value())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
//Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.

//In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

// Exemplo função Iterator
console.log('===============================================================')
console.log('===============================================================')
console.log('Estabelece um Iterador')

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() { //implements the Iterator protocol next()
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result; //returns an object with two properties value and done property
      } 
      return { value: iterationCount, done: true };
    }
  };
  return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);

console.log('===============================================================')
console.log('Estabelece um gerador')

//Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose ///execution is not continuous. Generator functions are written using the function* syntax.

function* makeRangeGenerator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const i = makeRangeGenerator();
console.log(i.next().value)
console.log(i.next().value)
