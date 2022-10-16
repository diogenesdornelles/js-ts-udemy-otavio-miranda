// for in retorna o index;

const frutas = ['banana', 'pera', 'uva'];
for (let index in frutas) {
  console.log(frutas[index]);
}

const pessoas = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30,
}

for (let key in pessoas) {
  console.log(pessoas[key]);
}

for (let key in pessoas) {
  console.log(key, pessoas[key]);
}