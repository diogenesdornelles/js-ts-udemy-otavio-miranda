function meuEscopo () { 
  const form = document.querySelector('.form'); 
  const resultado = document.querySelector('.resultado-final'); 
  let valorFinal;
  
  
  function onSubmit(evento) { 
    
    evento.preventDefault();
    
    const peso = form.querySelector('.peso'); 
    const altura = form.querySelector('.altura'); 
    console.log(typeof peso.value); 

    const checked = peso.value !== "" && altura.value !== "";

      if (checked === true) {
        const imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));
        if (imc < 18.5) {
          valorFinal = 'Abaixo do peso'
        } else if (imc >= 18.5 && imc <= 24.9) {
          valorFinal = 'Peso normal'
        } else if (imc > 25 && imc <= 29.9) {
          valorFinal = 'Sobrepeso'
        } else if (imc > 29.9 && imc <= 34.9) {
          valorFinal = 'Obesidade grau 1'
        } else if (imc > 35 && imc <= 39.9) {
          valorFinal = 'Obesidade grau 2'
        } else if (imc > 40) {2
          valorFinal = 'Obesidade grau 3'
        }


      resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} (${valorFinal})</p>`;
  
      document.alert('Cálculo efetuado com sucesso');
      } else { 
      document.alert('Dados completos devem ser fornecidos');
    }
  }

  form.addEventListener('submit', onSubmit);  // Primeiro parâmetro 'tipo de evento' a ser ouvido e segundo 'função callbak a ser chamada';
}

meuEscopo();