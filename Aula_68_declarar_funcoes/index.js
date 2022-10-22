// 1) Declaração de função ou funções nominadas (Function). As funções são um objeto autônomo.
// Ocorre o hoisting (JS eleva 'var' e 'function' ao topo do documento, permitindo o chamamentoantes da declaração)).
// Exemplo: 

sayhi();
function sayhi() {
  console.log("Oi");
}

// 2) Function expressions ou funções anônimas (Variável recebe uma função como dado).
// First-class objects (Objetos de primeira classe). Funções podem ser expressas como um dado.

const dado = function() {
  console.log('Sou um dado');
}
dado(); // Constante recebe função e a executa. Não há nome próprio.

// Função recebe uma outra função como dado e a executa no próprio escopo.
function executa(funcao) {
  funcao()
}
executa(dado);

// Arrow function
const arrow = () => {
  console.log('Sou uma arrow function');
}

arrow();

// Funções como atributos de objetos

const obj = {
  falar() {
    console.log('Sou uma função do objeto');
  }
}

obj.falar();

