
console.log('############ LITERAL ###############');
const person = { // por literal
  nome: 'Jojo',
  sobrenome: 'Dornelles',
}

console.log('############ ACESSO ###############');
let nome1 = 'nome';
console.log(person.nome); // notação de ponto
console.log(person['nome']); // notação de colchetes. 
console.log(person[nome1]); // notação de colchetes permite acesso dinâmico.

console.log('############ CONSTRUTOR ###############');
const person2 = new Object({ // por construtor
  nome: 'Jojo',
  sobrenome: 'Dornelles',
}); 
console.log(person2)

console.log('############ INSERIR CHAVE ###############');
person2.nome = 'Tato';
person2.sobrenome = 'Dornelles';
console.log(person2.nome)

console.log('############ APAGAR CHAVE ###############');
delete person2.nome; // apagar chave
console.log(person2);
person2.nome = 'Tato';
console.log(person2);

console.log('############ MÉTODOS ###############');
person2.falarnome = function() {console.log(`${this.nome}`)};
person2.falarnome();
person2.idade = 30;
person2.getAnoNascimento = function() {
  const anoAtual = new Date().getFullYear();
  return anoAtual - this.idade;
};
console.log(person2.getAnoNascimento());

console.log('############ VISUALIZAR CHAVES ###############');
for(let chave in person2) {
  console.log(chave);
}

console.log('############ VISUALIZAR VALORES ###############');
for(let chave in person2) {
  console.log(person2[chave]);
}

console.log('############ FACTORY FUNCTIONS ###############');
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get fullName() {
      return this.nome + ' ' + this.sobrenome;
    }
  }
}
const p1 = criaPessoa('Jojo', 'Dornelles');
console.log(p1.fullName);

console.log('############ CONSTRUCTOR FUNCTIONS ###############');

// new cria um objeto vazio e atrela this ao obj e retorna o this.
function CriaPessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this);
}

const p2 = new CriaPessoa('Dio', 'Dornelles');

console.log('############ TRAVAR O OBJ ###############');
Object.freeze(p1); // Trava o obj, não permitindo sequer modificação de valores.