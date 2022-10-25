// Função construtora ou class -> retorna um objeto.
// Construtora -> Pessoa (new)

class Pessoa {
  
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
      console.log(`Sou ${this.nome}`)};
    const ID = '12345'; // Variável interna
    const metodoInterno = () => { // método interno
      console.log('Qualquer coisa');
    };
  }
}

const p1 = new Pessoa('Jojo', 'Dornelles');
const p2 = new Pessoa('Tato', 'Dornelles');