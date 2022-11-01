const pessoas = [
  {id: 3, nome: 'Helena'},
  {id: 2, nome: 'Diego'},
  {id: 1, nome: 'David'},
];

// const novasPessoas = {};
// for ( const pessoa of pessoas ) {
//   const { id } = pessoa;
//   novasPessoas[ id ] = { ...pessoa };
// };

const novasPessoas = new Map();
for ( const pessoa of pessoas ) {
  const { id } = pessoa;
  novasPessoas.set( id, { ...pessoa });
};

console.log( novasPessoas ); // dado set

console.log('############### OBTER VALOR ####################');

console.log( novasPessoas.get(1) ); // obter chave set

console.log('############### ITERAR ####################');
for (const pessoa of novasPessoas){
  console.log(pessoa); // a iteração retorna um Array.
}

console.log('############### ITERAR 2 ####################');
for (const [_id, {id}] of novasPessoas){
  console.log(_id);
}

console.log('############### SELECIONAR CHAVES ####################');
for (const chave of novasPessoas.keys()){
  console.log(chave);
}

console.log('############### SELECIONAR VALORES ####################');
for (const val of novasPessoas.values()){
  console.log(val);
}
