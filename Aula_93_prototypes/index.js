function Pessoa(nome, sobrenome) {
  this.nome =  nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Jojo', 'Dornelles');
const p2 = new Pessoa('Tato', 'Dornelles');

console.dir(p1);
console.dir(p2);
