const pessoa = {
  nome: 'Jojo',
  sobrenome: 'Costa',
  idade: 2,
  endereco: {
    rua: 'Av. Brasil',
    numero: 320,
  }
}

const {nome, sobrenome, idade, telefone='Não tem'} = pessoa;
console.log(nome, sobrenome, idade, telefone);

const {endereco: {rua: r, numero}, endereco} = pessoa; // Extraindo valores do objeto 'endereço' para variáveis 'rua' e 'numero', bem como o objeto inteiro. Reatribuindo a chave 'rua' nome 'r'.
console.log(r, numero, endereco);

const {nome: nome1, ...rest} = pessoa;
console.log(nome1, rest);
