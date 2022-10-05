const array = [1, 2, 3];

const repo = [];

const person_1 = ['Elis', 'Maciel', '42']

const person_2 = ['Jojo', 'Maciel', '1']

repo.push(person_1, person_2);

console.log(repo);

const new_repo = { // objeto
    pessoa_01: { 
      nome: person_1[0],
      sobrebome: person_1[1],
      idade: person_1[2],
  },
    pessoa_02: {
      nome: person_2[0],
      sobrebome: person_2[1],
      idade: person_2[2],
  }
}

function person_ (nome, sobrebome, idade) { // factory function for creating a person
  return {nome, sobrebome, idade} // Não há necessidade de passar chave, se repete valor.
}

const new_person_2 = person_('Didi','Costa', 37);
const new_person_3 = person_('Max','Pet', 10);
const new_person_4 = person_('Otavio','Costa', 7);

new_repo.pessoa_03 = new_person_2;
new_repo.pessoa_04 = new_person_3;
new_repo.pessoa_05 = new_person_4;

console.log(new_repo);

console.log(new_repo.pessoa_01.nome);

const pessoa_01 = { // objeto 
    nome: person_1[0],
    sobrebome: person_1[1],
    idade: person_1[2],
    fala() {
      console.log(`Olá! Eu sou ${this.nome} ${this.sobrebome}, minha idade é ${this.idade} anos.`)
    },
    incrementaIdade() {
      this.idade++;
    }
}

console.log(pessoa_01);

pessoa_01.fala() 

pessoa_01.incrementaIdade(); 

console.log(pessoa_01);

pessoa_01.fala() 

