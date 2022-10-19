// Exercício 02: Elabore uma função nominada de ePaisagem que receba 02 valores numéricos referentes à largura e à altura de uma imagem e retorne true se estiver no modo paisagem.

function ePaisagem(largura, altura) {
  return largura > altura; //return largura > altura ? true : false;
};

const ePaisagemCosnt = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 800));
console.log(ePaisagemCosnt(1080, 800));