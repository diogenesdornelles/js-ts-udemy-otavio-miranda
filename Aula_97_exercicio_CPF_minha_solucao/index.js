const form1 = document.querySelector('.form-1'); 
const form2 = document.querySelector('.form-2'); 
form1.addEventListener('submit', onSubmitForm);
form2.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) { 
  event.preventDefault();
}

function CriaValidadorCPF() {

  this.inputValidar = '';
  this.buttonValidar = document.querySelector('#btn-submit-cpf');
  this.buttonLimpar = document.querySelector('#btn-limpar');
  this.pResultado = document.querySelector('.result-validar p');
  this.cont = 0;
  this.acc = 0;
  this.firstDigitoCheck = false;
  this.secondDigitoCheck = false;

  this.initialize  = () => this.addEvents(); 

  this.addEvents = () => {
    this.buttonValidar.addEventListener('click', this.getCPF);
    this.buttonLimpar.addEventListener('click', this.clearHtml);
  } 

  this.getCPF = () => {
    this.inputValidar = document.querySelector('#validar-cpf').value.replace(/\D+/g, '');
    if (typeof this.inputValidar !== 'undefined' && this.inputValidar.length === 11 && !this.isSequence()) {
      this.validarCPFPrimeiroDigitoVerificador();
    } else alert('Informe CPF corretamente.');
  }

  this.isSequence = () => {
    return (this.inputValidar[0].repeat(this.inputValidar.length) === this.inputValidar);
  }
  
  this.verificar = function (posicao) {
    console.log(posicao)
    for (let i = 0; i < posicao; i++) {
      this.acc += Number(this.inputValidar[i]) * this.cont;
      this.cont -= 1;
    }
    if (this.acc * 10 % 11  === Number(this.inputValidar[posicao])) {
      return true;
    }
  }
  
  this.validarCPFPrimeiroDigitoVerificador = () => {
    this.cont = 10;
    this.acc = 0;
    const posicaoPrimeiroDigito = this.cont - 1;
    this.firstDigitoCheck = this.verificar(posicaoPrimeiroDigito)
    this.validarCPFSegundoDigitoVerificador();
  }

  this.validarCPFSegundoDigitoVerificador = () => {
    this.cont = 11;
    this.acc = 0;
    const posicaoSegundoDigito = this.cont - 1;
    this.secondDigitoCheck = this.verificar(posicaoSegundoDigito)
    this.checarDigitos();
  }

  this.checarDigitos = () => {
    if (this.firstDigitoCheck && this.secondDigitoCheck) {
      this.addHtmlValido();
    } else this.addHtmlInvalido();
  }

  this.addHtmlValido = () => {
    this.pResultado.innerHTML = 'CPF VÁLIDO';
    this.pResultado.style.backgroundColor = '#4cb050';
    this.turnCheckFalse();
  }

  this.addHtmlInvalido = () => {
    this.pResultado.innerHTML = 'CPF INVÁLIDO';
    this.pResultado.style.backgroundColor = 'red';
  }

  this.turnCheckFalse = () => {
    this.firstCheck = false;
    this.secondCheck = false;
  }

  this.clearHtml= () => {
    this.pResultado.innerHTML = '';
    document.querySelector('#validar-cpf').value = '';
    this.pResultado.style.backgroundColor = 'inherit';
  }
}

const validador = new CriaValidadorCPF();
validador.initialize();

function CriaGeradorCPF() {

  this.listaNumerosCPF = [];
  this.buttonGerar = document.querySelector('#gerar-cpf');
  this.pResultado = document.querySelector('.result-gerar p');
  this.cont = 10;
  this.acc = 0;
  this.result = '';
  this.firstVerificador = '';
  this.secondVerificador = '';
  
  this.initialize  = () => {
    this.addEvents();
  };

  this.fillListaNumeros  = () => {
    for (let i = 0; i < 9; i++){
      this.listaNumerosCPF.push(this.generateRandomIntegerInRangeZeroNove()); 
    }
  };

  this.generateRandomIntegerInRangeZeroNove  = () =>  {
    const carac = Math.floor(Math.random() * 10);
    return carac;
  };

  this.addEvents  = () =>  {
    this.buttonGerar.addEventListener('click', this.addVerificadoresCpf.bind(this));
  };

  this.geraDigito = function (posicao){
    for (let i = 0; i < posicao; i++) {
      this.acc += this.listaNumerosCPF[i] * this.cont;
      this.cont--;
    }
    if (((this.acc * 10) % 11) >= 10){
      return 0;
    } else return (this.acc * 10) % 11;
  }

  this.addVerificadoresCpf  = () => { 
    this.fillListaNumeros();
    this.cont = 10;
    this.acc = 0;
    const posicaoPrimeiroDigito = this.cont - 1;
    this.firstVerificador = this.geraDigito(posicaoPrimeiroDigito);
    this.listaNumerosCPF.push(this.firstVerificador);
    this.cont = 11;
    this.acc = 0;
    const posicaoSegundoDigito = this.cont - 1;
    this.secondVerificador = this.geraDigito(posicaoSegundoDigito);
    this.listaNumerosCPF.push(this.secondVerificador);
    this.formatResult();
  }

  this.formatResult = () =>  {
    this.listaNumerosCPF.splice(3, 0, '.');
    this.listaNumerosCPF.splice(7, 0, '.');
    this.listaNumerosCPF.splice(11, 0, '-');
    this.result = this.listaNumerosCPF.join('');
    this.pResultado.style.backgroundColor = '#4cb050';
    this.pResultado.innerHTML = this.result;
    this.clearSettings();
  }

  this.clearSettings  = () =>  {
    this.listaNumerosCPF = [];
    this.result = '';
    this.firstVerificador = '';
    this.secondVerificador = '';
  }
  
  this.copyText  = () =>  {

    const copyText = document.querySelector('.result-gerar p').innerHTML;
  
    navigator.clipboard.writeText(copyText);
  
    alert("CPF copiado: " + copyText);
  }
}

const gerador = new CriaGeradorCPF();
gerador.initialize();


