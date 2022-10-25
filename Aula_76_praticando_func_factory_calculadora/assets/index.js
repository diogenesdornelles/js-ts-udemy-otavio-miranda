// Função fábrica -> Fabrica um objeto.
// https://medium.com/@viniazvd/classes-vs-fun%C3%A7%C3%B5es-construtoras-vs-fun%C3%A7%C3%B5es-f%C3%A1brica-b92a6afa70a4

// SOLUÇÃO 1
/** 
(function (){
  const painel = document.querySelector('.painel');
  const buttons = document.querySelectorAll('.buttons');
  buttons.forEach((button) => button.addEventListener('click', captureText));
  let toEquationList = [];

  function captureText(event){
    let button = event.target.innerHTML;
    contollerApp(button);
  }

  function contollerApp(button) {
    if (button === '=') {
      solveEquation(toEquationList);
      toZeroList();
    } else if (button === 'Del') {
      toEquationList.pop();
      updateHtml();
    } else if (button === 'C') {
      toZeroList();
      updateHtml();
    } else {
      toEquationList.push(button);
      updateHtml();
    }
  }

  function solveEquation(entries){
    try
      {
      const result = eval(entries.join(''));
      updateHtmlResult(result);
      toEquationList = [];
    } catch(e) {
      painelError();
      toZeroList();
    }
  }

  function toZeroList() {
    toEquationList = [];
  }

  function updateHtml() {
    painel.innerHTML = toEquationList.join('');
  }

  function updateHtmlResult(result) {
    painel.innerHTML = `${result}`;
  }

  function painelError(){
    painel.innerHTML = 'Not valid input';
  }
})()
*/

// SOLUÇÃO 2 - Factory function.
(function(){
  function criaCalculadora() {
    
    return {
      painel: document.querySelector('.painel'),
      buttons: document.querySelectorAll('.buttons'),
      button: '',
      toEquationList: [],
      result: '',

      initialize() {
        this.addEvent();
      },

      addEvent() {
        this.buttons.forEach((button) => button.addEventListener('click', this.controllerApp.bind(this))); // Caso não seja intenção, não esquecer método bind(), se usar event.target, para evitar a modificação de contexto de objeto para o elemento html alvo do escutador, caso contrário 'this', como referência ao próprio objeto, não funciona na função subsequente. 
      },

      toZeroList() {
        this.toEquationList = [];
      },
    
      updateHtml() {
        this.painel.innerHTML = this.toEquationList.join('');
      },
    
      updateHtmlResult() {
        this.painel.innerHTML = this.result;
      },
    
      painelError(){
        this.painel.innerHTML = 'Not valid input';
      },
      
      controllerApp(event) {
        
        this.button = event.target.innerHTML;
        
        if (this.button === '=') {
          this.solveEquation();
          this.toZeroList();
        } else if (this.button === 'Del') {
          this.toEquationList.pop();
          this.updateHtml();
        } else if (this.button === 'C') {
          this.toZeroList();
          this.updateHtml();
        } else {
          this.toEquationList.push(this.button);
          this.updateHtml();
        }
      },

      solveEquation(){
        try
          {
          this.result = eval(this.toEquationList.join(''));
          this.updateHtmlResult();
          this.toEquationList = [];
        } catch(e) {
          this.painelError();
          this.toZeroList();
        }
      },
    }
  }

const calc = criaCalculadora();
calc.initialize();

})()
