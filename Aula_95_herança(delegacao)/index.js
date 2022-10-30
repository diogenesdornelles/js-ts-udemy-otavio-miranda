// e-commerce service: caneta, caderno, lapis, mochila, etc. --> Produto

function Produto(nome, descricao, preco, estoque,  marca, active) {

  Object.defineProperties(this, {
    nome: {
      value: nome, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
    descricao: {
      value: descricao, 
      enumerable: true, 
      writable: true, 
      configurable: false,
    },
    preco: {
      value: preco, 
      enumerable: true,
      writable: true, 
      configurable: false, 
    },
    marca: {
      value: marca, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
    active: {
      value: active, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
    estoque: {
      enumerable: true, 
      configurable: false,
      get: function () {
        return estoque;
      },
      set: function (valor){
        if (typeof valor === 'number'){
          estoque = valor;
        }
      }
    }
  });
}

Produto.prototype.precoDesconto = function (percent) {
  if(typeof percent === 'number'){
  this.preco = Number((this.preco * (1 - percent/100)).toFixed(2));
  } else throw new TypeError('Invalid percentage');
}

Produto.prototype.precoAumento = function (percent) {
  if(typeof percent === 'number'){
  this.preco = Number((this.preco * (1 + percent/100)).toFixed(2));
  } else throw new TypeError('Invalid percentage');
}

Produto.prototype.alteraEstoque = function (qnt) {
  if(typeof qnt === 'number') {
    this.estoque = this.estoque + Math.trunc(qnt);
  } else throw new TypeError('Invalid qnt');
}

Produto.prototype.deActive = function(){
  this.estoque = 0;
  this.active = false;
  this.nome.enumerable = false;
  this.descricao.enumerable = false;
  this.marca.enumerable = false;
  this.active.enumerable = false;
  this.estoque.enumerable = false;
  this.preco.enumerable = false;
}

function Caneta(nome, descricao, preco, estoque,  marca, active, cor, ponta){
  Produto.call(this, nome, descricao, preco, estoque,  marca, active); // call atrrs. incorpora totalmente ao objeto.
  Object.setPrototypeOf(this, Produto.prototype); // call methods. mas ficam em outro __proto__
  Object.defineProperties(this, {
    cor: {
      value: cor, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
    ponta: {
      value: ponta, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
  });
}

const c1 = new Caneta('Caneta', 'Esferográfica', 2, 10, 'BIC', true, 'preta', 'fina');

c1.alteraEstoque(10);
c1.precoAumento(10);

console.log(c1);

function Caderno(nome, descricao, preco, estoque,  marca, active, tamanho, tipo){
  Produto.call(this, nome, descricao, preco, estoque,  marca, active); 
  Object.setPrototypeOf(this, Produto.prototype); 
  Object.defineProperties(this, {
    tamanho: {
      value: tamanho, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
    tipo: {
      value: tipo, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
  });
}

const c2 = new Caderno('Caderno A', 'Caderno de estudo para caligrafia', 15, 10, 'Tilibra', true, '200 fls.', 'Caligrafia');

c2.alteraEstoque(10);
c2.precoAumento(10);

 console.log(c2.estoque);


