function meuEscopo () { 
  const form = document.querySelector('.form'); 
  const resultado = document.querySelector('.result');
  const pessoas = [];
  
  function onSubmit(evento) { 
    
    evento.preventDefault();
    
    const nome = form.querySelector('.nome'); 
    const sobrenome = form.querySelector('.sobrenome'); 
    const peso = form.querySelector('.peso'); 
    const altura = form.querySelector('.altura'); 

    resultado.innerHTML += `<p> Nome: ${nome.value} Sobrenome: ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value}</p>`;
    
    const dadosPessoas = {
      nome: nome.value, 
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    }

    pessoas.push(dadosPessoas);

    console.log(pessoas);
  }

  form.addEventListener('submit', onSubmit);  // Primeiro parâmetro 'tipo de evento' a ser ouvido e segundo 'função callbak a ser chamada';

}

meuEscopo();

// 2ª Forma:
/** 
 * const form = document.querySelector('.form'); // .querySelector: seleciona elementos como se fossem tag, classes, ids, atributo declarados * no css.
 * form.onsubmit = function(evento) {  // Seleciona evento submit. Precisa do 'on'.
 * evento.preventDefault(); // Prevenir que o formulário seja enviado.
 * };
 */