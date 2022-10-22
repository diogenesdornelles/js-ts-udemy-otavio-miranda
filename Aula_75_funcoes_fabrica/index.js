// factory functions

function createPerson(nome, sobrenome, p, a) {
  return {
    
    nome: nome,
    
    sobrenome: sobrenome,
    
    peso: p,
    
    altura: a,

    pai: 'Dio', // Default somente com this.
    
    mae: 'Elis',

    fala(idade) {
      return `Meu nome é ${this.nome} ${this.sobrenome} e tenho ${idade} anos de idade. Meu pai é ${this.pai} e minha mãe ${this.mae}.`
    },
    
    get imc() { // Getter faz função comportar-se como atributito, similar à property em python.
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
   
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
  }
}

const p1 = createPerson('Jojo', 'Dornelles', 12, 0.85);
console.log(p1.fala(2)); 
console.log(p1.imc);
p1.nomeCompleto = 'Joana Dornelles Costa';
console.log(p1);