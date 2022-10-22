// IIFE - Immediatelly invoked function expression

// Protegendo variáveis e funções do escopo global.
(function(idade, peso, altura){
  const nome = 'Jojo';
  function falaOi(){
    console.log('Olá,', nome);
  }
  falaOi()
  console.log(`Idade: ${idade}, peso: ${peso}, altura: ${altura}cm`);
})(2, 12, 85);

const nome = 'Tato';
console.log(nome);
