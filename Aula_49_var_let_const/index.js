// Engine do JS busca variável em cada escopo, até achar, caso contrário, retorna erro.
// Let não pode ser sobrescrita dentro do mesmo bloco. Let possui escopo de bloco { ... }. 
// Possível utilizar var declarada externamente. Não é possível reutilizar let declarada dentro de bloco externo.
// const pode ser reaproveitada em qualquer escopo (bloco ou de função).

// Escopo global
const verdadeira = true;
let cor_1 = 'Azul'; 
var cor_2 = 'Vermelho'; // Admite ser sobrescrita. Var tem escopo de função.
var cor_2 = 'Verde'; // Redeclarada. 

console.log(cor_1, cor_2); //Azul Verde (global global)

if (verdadeira) {
  let cor_1 = 'Laranja';
  var cor_2 = 'Rosa';
  console.log(cor_1, cor_2); // Laranja Rosa (local local)
  if (verdadeira) { 
    let cor_1 = 'Branco';
    var cor_2 = 'Roxo';
    let cor_5 = 'Anil';
    console.log(cor_1, cor_2); // Branco Roxo (local local)
  }
}

console.log(cor_1, cor_2); // Azul Roxo (global local (último bloco))

function falaOi () {
  var cor_2 = 'Cinza'; // Não é utilizada, pois tem escopo restrito à função.
  var cor_3 = 'Preto';
  console.log('Oi', cor_4); 
  if (verdadeira) {
    console.log(cor_2, cor_3); // Var pode ser reutilizada em outros blocos dentro da mesma função.
  }
}

var cor_4 = 'lilás';

console.log(cor_1, cor_2); //  var cor_3 is not defined aqui.

console.log(cor_6);

var cor_6 = 'marrom'; // retorna undefined. const e let, error not assignment.
