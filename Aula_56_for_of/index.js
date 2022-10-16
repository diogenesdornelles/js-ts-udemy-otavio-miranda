// for of retorna o próprio valor de um objeto iterável;

const nome = 'Joana Maciel';

for (let valor of nome) {
  console.log(valor);
}

const nomes = ['Joana', 'Tato', 'Elis'];

for (let nome of nomes) {
  console.log(nome);
}

nomes.forEach((element, index, array) => {
  console.log(element, index, array);
});

const pessoas = { 
  1: 'Joana Maciel',
  2: 'Tato Maciel',
}

for (let pessoa of pessoas) {
  console.log(pessoa); // Objeto não é iterável.
}
