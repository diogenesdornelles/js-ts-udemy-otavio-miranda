// for clássico

for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}

for (let i = 0; i <= 500; i += 10) {
  console.log(`Linha ${i}`);
}

for (let i = 500; i >= 10; i -= 10) {
  console.log(`Linha ${i}`);
}

for (let i = 1; i <= 20; i++) {
  const par = i % 2 === 0 ? i : `Não é par`;
  console.log(`Resultado ${par}`);
}

const frutas = ['banana', 'macã', 'pera'];
const size = frutas.length;

for (let i = 0; i < size; i++) {
  console.log(`índice ${i}:`, frutas[i]);
}