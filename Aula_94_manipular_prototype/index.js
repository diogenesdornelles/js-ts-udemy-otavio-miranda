console.log('############  SET PROTOTYPE OF ENTRE LITERALS ###############');
// Mesma coisa que new Object
// new Object -> Object.prototype
const objA = {
  chaveA: 'A',
  // __proto__: Object.prototype -> Implicitamente.
}

const objB = {
  chaveB: 'B',
  // objA.__proto__:
  // __proto__: Object.prototype -> Implicitamente.
}

const objC = {
  chaveB: 'C',
  // objA.__proto__:
  // __proto__: Object.prototype -> Implicitamente.
}

Object.setPrototypeOf(objB, objA); // copia attr e métodos de objA, similar à herança.
Object.setPrototypeOf(objC, objB); // objC herda de objA em cadeia.

console.log(objB.chaveA);
console.log(objC.chaveA);

console.log('############  METODOS PROTOTYPE FUNCTION E SET PROTOTYPE OF ###############');

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.precoDesconto = function (percent) {
  this.preco = (this.preco * (1 - percent/100)).toFixed(2);
};

Produto.prototype.precoAumento = function (percent) {
  this.preco = (this.preco * (1 + percent/100)).toFixed(2);
};

const p1 = new Produto('Camisa', 100);
console.log(p1);
p1.precoDesconto(100);
console.log(p1);

console.log('############  METODOS PROTOTYPE LITERAL ###############');

const p2 = {
  nome: 'Calça',
  preco: '200',
}

console.log(p2);
Object.setPrototypeOf(p2, Produto.prototype);
p2.precoAumento(10);
console.log(p2);

console.log('############  METODO CREATE ###############');

const p3 = Object.create(Produto.prototype, {
  tamanho: {
    value: 'M',
    writable: true,
    configurable: false,
    enumerable: true,
  },
  estoque: {
    value: 10,
    writable: true,
    configurable: false,
    enumerable: true,
  },
  preco: {
    value: 150,
    writable: true,
    configurable: false,
    enumerable: true,
  },
  nome: {
    value: 'vestido',
    writable: true,
    configurable: false,
    enumerable: true,
  }
});

console.log(p3);
p3.precoAumento(10);
console.log(p3);