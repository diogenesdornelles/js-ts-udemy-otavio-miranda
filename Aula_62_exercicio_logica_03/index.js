// Exercício 03 (FizzBuzz):

function fizzBuzz(number) {
  if (typeof number !== 'number') {
    return 'Not a number';
  } 
  else if (number < 0 || number > 100) {
    return 'Not a valid number';
  }
  else {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else {
      return number;
    }
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i))
}
