console.log('############ defineProperty ###############');

function Produto(nome, preco, estoque){
  this.nome = nome; // 'this' assume variável pública.
  this.preco = preco;
  // this.estoque = estoque; // não está definido no this.. então é privada.
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // exibe a chave em si.
    value: estoque,  // exibe valor da chave.
    writable: false, // valor não pode ser alterado. true, sim.
    configurable: false, // não aceita reconfigurações, como delete. se true, sim.
  });
}

const p1 = new Produto('Camiseta', 30, 3);
console.log(p1)

console.log(Object.keys(p1));

if (Object.keys(p1).find(element => element === 'preco')) {
  console.log('true');
}

if (Object.keys(p1).includes('nome')) {
  console.log('true');
}

console.log('############ defineProperties ###############');

function Produto2(nome, preco, estoque){
  Object.defineProperties(this, {
    nome: {
      value: nome, //valor
      enumerable: true, // monstra chave
      writable: true, // pode alterar valor
      configurable: false, // pode ser reconfigurado
    },
    preco: {
      value: preco, //valor
      enumerable: true, // monstra chave
      writable: true, // pode alterar valor
      configurable: false, // pode ser reconfigurado
    },
    estoque: {
      value: estoque, //valor
      enumerable: true, // monstra chave
      writable: false, // pode alterar valor
      configurable: false, // pode ser reconfigurado
    }
  });
}

const p2 = new Produto2('Calças', 50, 5);
console.log(p2)