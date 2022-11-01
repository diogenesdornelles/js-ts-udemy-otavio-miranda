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
      this.validarCPFDigitos();
    } else alert('Informe CPF corretamente.');
  }

  this.isSequence = () => {
    return (this.inputValidar[0].repeat(this.inputValidar.length) === this.inputValidar);
  }
  
  this.verificar = function (posicao) {
    let acc = 0;
    for (let i = 0; i < posicao; i++) {
      acc += Number(this.inputValidar[i]) * this.cont;
      this.cont--;
    }
    if (acc * 10 % 11  === Number(this.inputValidar[posicao])) {
      return true;
    }
  }
  
  this.validarCPFDigitos = () => {
    this.cont = 10;
    const posicaoPrimeiroDigito = this.cont - 1;
    this.firstDigitoCheck = this.verificar(posicaoPrimeiroDigito)
    this.cont = 11;
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
    this.pResultado.style.backgroundColor = 'white';
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

  this.geraDigito = function (){
    let soma = this.listaNumerosCPF.reduce((acc, val) => {
        acc += val * this.cont;
        this.cont--;
        return acc;
      }, 0);
    if (((soma * 10) % 11) >= 10){
      return 0;
    } else return (soma * 10) % 11;
  }

  this.addVerificadoresCpf  = () => { 
    this.fillListaNumeros();
    this.cont = 10;
    this.acc = 0;
    this.firstVerificador = this.geraDigito();
    this.listaNumerosCPF.push(this.firstVerificador);
    this.cont = 11;
    this.acc = 0;
    this.secondVerificador = this.geraDigito();
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


