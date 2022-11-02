// Por desacoplamento. Métodos podem ser usados em qualquer objeto, aleatoriamente, mediante composição, sem herança. Chama-se usualmente em programação de Mixin. 
const falarMixin = function(){
      console.log(`${this.nome} está falando.`)
    };

const comerMixin = function(){
  console.log(`${this.nome} está falando.`)
};

const beberMixin = function(){
  console.log(`${this.nome} está falando.`)
};

const pessoaPrototype = {...falarMixin, ...comerMixin, ...beberMixin};
// const pessoaPrototype = Object.assign({}, falarMixin, comerMixin, beberMixin);

function criaPessoa(nome, sobrenome){
  
  // Por acoplamento
  // const pessoaPrototype = {
    
  //   falar: function(){
  //     console.log(`${this.nome} está falando.`)
  //   },

  //   comer: function(){
  //     console.log(`${this.nome} está comendo.`)
  //   }
  // }

  return Object.create(pessoaPrototype, {
    nome: {
      value: nome,
      writable: true,
      configurable: false,
      enumerable: true,
    },
    sobrenome: {
      value: sobrenome,
      writable: true,
      configurable: false,
      enumerable: true,
    },
  }); 
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.__proto__)