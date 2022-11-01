class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  // metodos são inseridos diretamente no prototype.
  falar() {
    console.log(`${this.nome} está falando.`);
  }
  comer(){
    console.log(`${this.nome} está comento.`);
  }
  beber(){
    console.log(`${this.nome} está bebendo.`);
  }
}

function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenomes = sobrenome;
}

Object.setPrototypeOf(Pessoa2.prototype, Pessoa.prototype);
Pessoa2.prototype.andar = function(){
  console.log(`${this.nome} está andando.`)
}

const p1 = new Pessoa('Jojo', 'Costa');
const p2 = new Pessoa('Tato', 'Costa');
const p3 = new Pessoa2('Elis', 'Maciel');
p1.beber();
p2.falar();
p3.comer();
p3.andar();
