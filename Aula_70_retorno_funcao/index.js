console.log('##########################'); 

function criaPessoa(nome, sobrenome) {
  return {nome: nome, sobrenome: sobrenome};
}

const p1 = criaPessoa('Elis', 'Batista');

console.log('##########################'); 

function falaFrase (comeco){
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo'));

console.log('##########################'); 

// closure function
function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));