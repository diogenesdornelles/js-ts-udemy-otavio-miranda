const number = 10;

if (number >= 0) {
  console.log('Número maior ou igual a 0.');
} 

if (number >= 0 && number <= 5) {
  console.log('Número maior ou igual a 0 e menor ou igual a 5.');
} else {
  console.log('Número não é maior ou igual a 0 e nem menor ou igual a 5.');
}

if (number >= 0 && number <= 5) {
  console.log('Número maior ou igual a 0 e menor ou igual a 5.');
} else if (number > 5 && number <= 11) {
  console.log('Número maior ou igual a 6 e menor ou igual a 11.');
} else if (number > 11 && number <= 17) {
  console.log('Número maior ou igual a 12 e menor ou igual a 17.');
} else {
  console.log('Número não está entre 0 e 17.');
}
