try {
  console.log(nonExists);
} catch (err) {
  console.log('nonExists não existe');
  console.log(err); //ReferenceError: nonExists is not defined
}

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('x and y must be numbers');
  } else return x + y;
}

console.log(soma(2, '2'));