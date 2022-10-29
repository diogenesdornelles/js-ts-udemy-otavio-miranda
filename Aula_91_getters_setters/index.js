function Produto(nome, preco, estoque){
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
      //value: estoque, //valor
      //writable: false, // pode alterar valor
      enumerable: true, // monstra chave
      configurable: false, // pode ser reconfigurado
      get: function() {
        return estoque;
      },
      set: function(valor){
        if (typeof valor ===  'number') {
          estoque += Math.trunc(valor);
        } else throw new TypeError('Deve ser numero');
      }
    }
  });
}

const p2 = new Produto('Calças', 50, 5);
p2.estoque = '-3';
console.log(p2.estoque);

function criaProduto(nome, preco) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
    get preco() {
      return preco;
    },
    set preco(valor) {
      preco = valor;
    },
  }
}

const p3 = criaProduto('Jaqueta', 100);