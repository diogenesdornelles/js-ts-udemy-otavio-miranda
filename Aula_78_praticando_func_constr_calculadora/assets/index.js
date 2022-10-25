
class Calculadora {
  
  constructor() {
    
    this.painel = document.querySelector('.painel');
    this.buttons = document.querySelectorAll('.buttons');
    this.button = '';
    this.toEquationList = [];
    this.result = '';
    
    this.initialize = () => this.addEvents();

    this.addEvents = () => {
      this.buttons.forEach((button) => button.addEventListener('click', this.controllerApp.bind(this)));
       // Usar .bind() método para não trocar contexto, vide exercício 76.
      document.addEventListener('keyup', event => {
        if (event.key !== 'Enter') {return};
        this.solveEquation();
      });
      document.addEventListener('keyup', event => {
        if (event.key === 'ArrowLeft') {this.del(), this.updateHtml()};
      });
    };

    this.del = () => this.toEquationList.pop();

    this.toZeroList = () => this.toEquationList = [];
  
    this.updateHtml = () => this.painel.innerHTML = this.toEquationList.join('');
  
    this.updateHtmlResult = () => this.painel.innerHTML = this.result;

    this.painelError = () => this.painel.innerHTML = 'Not valid input';
    
    this.controllerApp = event =>  {
      
      this.button = event.target.innerHTML;
      
      if (this.button === '=') {
        this.solveEquation();
        this.toZeroList();
      } else if (this.button === 'Del') {
        this.del();
        this.updateHtml();
      } else if (this.button === 'C') {
        this.toZeroList();
        this.updateHtml();
      } else {
        this.toEquationList.push(this.button);
        this.updateHtml();
      }
    },

    this.solveEquation = () => {
      try
        {
        this.result = eval(this.toEquationList.join(''));
        this.updateHtmlResult();
        this.toEquationList = [];
      } catch(e) {
        this.painelError();
        this.toZeroList();
      }
    };
  }
}

const calc = new Calculadora();
calc.initialize();