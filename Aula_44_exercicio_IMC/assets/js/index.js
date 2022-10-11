function myScope () { 

  const resultado = document.querySelector('.resultado-final'); 
  const form = document.querySelector('.form'); 
  form.addEventListener('submit', onSubmitForm);
  
  function onSubmitForm(event) { 
    event.preventDefault();
    mainApplication(event);
  }

  function mainApplication(event) {

    const inputPeso = event.target.querySelector('.peso'); 
    const inputAltura = event.target.querySelector('.altura'); 
    const checked = validateForm(inputPeso, inputAltura);

    if (checked === true) {
      const imc = getImc(inputPeso, inputAltura);
      const textoResultado = getResultImc(imc);
      addHtmlResult(imc, textoResultado);
      clearInputs(inputPeso, inputAltura);
    } else { 
        addHtmlFail();
        clearInputs(inputPeso, inputAltura);
    }
  }

  function getImc(peso, altura) {
    const imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));
    return imc; 
  }

  function getResultImc(imc) {

    let textoResultado;

    if (imc < 18.5) {
      textoResultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.99) {
      textoResultado = 'Peso normal';
    } else if (imc > 25 && imc <= 29.99) {
      textoResultado = 'Sobrepeso';
    } else if (imc > 29.99 && imc <= 34.99) {
      textoResultado = 'Obesidade grau 1';
    } else if (imc > 35 && imc <= 39.99) {
      textoResultado = 'Obesidade grau 2';
    } else if (imc > 40) {2
      textoResultado = 'Obesidade grau 3';
    }
    return textoResultado;
  }

  function addHtmlResult(imc, text) {
    clearResult();
    const p = createP();
    p.classList.add("paragrafo-resultado-sucesso");
    p.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${text})`;
    appendP(p);
  }

  function addHtmlFail() {
    clearResult();
    const p = createP();
    p.classList.add("paragrafo-resultado-falha");
    p.innerHTML = `Digite valores válidos.`;
    appendP(p);
    moveForm();
  }

  function validateForm(peso, altura) {
    const checked = peso.value !== "" && altura.value !== "" && peso.value !== NaN && altura.value !== NaN;
    return checked;
  }

  function clearResult (){
    resultado.innerHTML = '';
  }

  function createP() {
    const p = document.createElement("p");
    return p;
  }

  function appendP(p) {
    resultado.appendChild(p);
  }

  function clearInputs(peso, altura) {
    peso.value = '';
    altura.value = '';
  }

  const moveRight = [
    { transform: 'translate(-50%, -50%)'},
    { transform: 'translate(-47%, -50%)'},
    { transform: 'translate(-50%, -50%)'},
  ];

  const moveRightTiming = {
    duration: 200,
    iterations: 1,
    transition: 'all ease-in-out',
  }

  function moveForm() {
    const form = document.querySelector('.container'); 
    form.animate(moveRight, moveRightTiming)
  }

}

myScope();
