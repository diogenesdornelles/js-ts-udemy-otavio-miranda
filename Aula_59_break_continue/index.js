const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log('######### continue #############');

for (let n of numeros) {
  if (n === 4) {
    console.log('skip 4');
    continue; 
  } else {
    console.log(n);
  }
}

console.log('######### break #############');

for (let n of numeros) {
  if (n === 7) {
    break; // exit block immediately
  } else {
    console.log(n);
  }
}