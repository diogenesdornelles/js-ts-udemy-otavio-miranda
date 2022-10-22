// Escopo léxico: Em JS, a função conhece o que está declarado no escopo e nos arredores.
const nome = 'Luiz';

function falaNome() {
  const nome = 'Otávio';
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Miranda';
  falaNome();
}

usaFalaNome(nome);