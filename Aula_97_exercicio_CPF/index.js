const form1 = document.querySelector('.form-1'); 
const form2 = document.querySelector('.form-2'); 
form1.addEventListener('submit', onSubmitForm);
form2.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) { 
  event.preventDefault();
}


function CriaValidador() {

  this.inputValidar = '';
  this.buttonValidar = document.querySelector('#btn-submit-cpf');
  this.pResultado = document.querySelector('.result-validar p');
  this.cont = 10;
  this.acc = 0;
  this.firstCheck = false;
  this.secondCheck = false;

  this.initialize  = () => this.addEvents(); 

  this.addEvents = function(){
    this.buttonValidar.addEventListener('click', this.getCpf);
  } 

  this.getCpf = () => {
    this.inputValidar = document.querySelector('#validar-cpf').value;
    this.inputValidar = this.inputValidar.replace('.', '');
    this.inputValidar = this.inputValidar.replace('.', '');
    this.inputValidar = this.inputValidar.replace('-', '');
    this.validar();
  }
  
  this.validar = () => {
    for (let i = 0; i < 9; i++) {
      this.acc += Number(this.inputValidar[i]) * this.cont;
      this.cont -= 1;
    }
    if (this.acc * 10 % 11  === Number(this.inputValidar[9])) {
      this.firstCheck = true;
    }
    this.acc = 0;
    this.cont = 11;
    for (let i = 0; i < 10; i++) {
      this.acc += Number(this.inputValidar[i]) * this.cont;
      this.cont -= 1;
    }
    if (this.acc * 10 % 11 === Number(this.inputValidar[10])) {
      this.secondCheck = true;
    }
    this.acc = 0;
    this.cont = 10;
    if (this.firstCheck && this.secondCheck) {
      this.addHtmlValido();
    } else this.addHtmlInvalido();
  }
  this.addHtmlValido = () => {
    this.pResultado.innerHTML = 'CPF VÁLIDO';
    this.turnCheckFalce();
  }
  this.addHtmlInvalido = () => {
    this.pResultado.innerHTML = 'CPF INVÁLIDO';
  }
  this.turnCheckFalce = () => {
    this.firstCheck = false;
    this.secondCheck = false;
  }
  this.clearHtml= () => {
    this.pResultado.innerHTML = '';
  }
}


const validador = new CriaValidador();
validador.initialize();




