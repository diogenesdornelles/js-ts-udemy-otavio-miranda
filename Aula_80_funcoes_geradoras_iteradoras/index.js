// Lazy evaluation

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


console.log('###############################')
// contador infinito

function* getNum2() {  
  let i = 0;
  while(true){
    yield i;
    i++;
  }
}

console.log('###############################')

function* getNum3() {  
  const Array = ['banana', 'pera', 'uva', 'abacaxi', 'melão'];
  for (let i = 0; i < Array.length; i += 1) {
    yield Array[i];
  }
}

const n3 = getNum3();
console.log(n3.next())
console.log(n3.next())
console.log(n3.next())
console.log(n3.next())
console.log(n3.next())
console.log(n3.next())




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
//Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.

//In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

// Exemplo função Iterator

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