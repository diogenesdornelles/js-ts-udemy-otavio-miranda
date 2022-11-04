(function myForm(){

  const form = document.querySelector('.form'); 
  const nome = document.querySelector('#nome');
  const sobrenome = document.querySelector('#sobrenome');
  const cpf = document.querySelector('#cpf');
  const usuario = document.querySelector('#usuario');
  const senha = document.querySelector('#senha');
  const repSenha = document.querySelector('#repetir-senha');
  const inputs = document.querySelectorAll('.container input');
  const btn = document.querySelector('#btn-submit');

  form.addEventListener('submit', onSubmitForm);
  btn.addEventListener('click', validarForm);
  
  class ValidadorCPF {
    constructor(cpf){
      this.arrayCpf = cpf.replace(/\D+/g, '').split('');
      this.firstDigito = false;
      this.secondDigito = false;
    }

    validarCPF(){
      if (typeof this.arrayCpf === 'undefined') return false;
      if (this.arrayCpf.length !== 11) return false;
      if (this.isSequencia()) return false;
      this.firstDigito = this.verificaDigitos(9);
      this.secondDigito = this.verificaDigitos(10);
      const resultado = this.resultado();
      return resultado;
    }

    verificaDigitos(posicao){
      let cont = posicao + 1;
      const resultado = this.arrayCpf.slice(0, posicao).reduce((acc, current) => {
        acc += Number(current) * cont;
        cont--;
        return acc;
      }, 0);

      if ((resultado * 10) % 11 === Number(this.arrayCpf[posicao])) {
        return true;
      } false;
    }

    resultado(){
      return this.firstDigito && this.secondDigito ? true : false;
    } 

    isSequencia = function(){
      let cpfLimpo = this.arrayCpf.join("");
      return (cpfLimpo[0].repeat(cpfLimpo.length) === cpfLimpo);
    }
  }

  function onSubmitForm(event) { 
    event.preventDefault();
  }

  function validarForm(){
    clearAdvices();
    if (!validarNome()) return;
    if (!validarSobrenome()) return;
    if (!validarCpf()) return;
    if (!validarUsuario()) return;
    if (!validarSenha()) return;
    if (!validarRepSenha()) return;
    alert('Cadastro efetuado com sucesso!');
    clearInputs();
  }

  function validarNome(){
    if (nome.value === ''){
      insertAdviceHtml('Informe nome do novo usuário.', nome);
      return false;
    }
    return true;
  }

  function validarSobrenome(){
    if (sobrenome.value === ''){
      insertAdviceHtml('Informe sobrenome do novo usuário.', sobrenome);
      return false;
    } 
    return true;
  }

  function validarSenha(){
    if (senha.value === ''){
      insertAdviceHtml('Informe senha.', senha);
      return false;
    }
    if (senha.value.length < 6 || senha.value.length > 12){
      insertAdviceHtml('Senha deverá ter entre 6 e 12 caracteres.', senha);
      return false;
    } 
    return true;
  }

  function validarRepSenha(){
    if (repSenha.value === ''){
      insertAdviceHtml('Informe senha novamente.', repSenha);
      return false;
    }
    if (senha.value !== repSenha.value){
      insertAdviceHtml('Senhas não conferem.', repSenha);
      return false;
    } 
    return true;
  }

  function validarUsuario(){
    if (usuario.value === ''){
      insertAdviceHtml('Informe usuario.', usuario);
      return false;
    } 
    if (usuario.value.length < 3 || usuario.value.length > 12){
      insertAdviceHtml('Usuário deverá ter entre 3 e 12 caracteres.', usuario);
      return false;
    } 
    if (!/^[A-Za-z0-9]*$/.test(usuario.value)){
      insertAdviceHtml('Usuário só poderá conter letras e/ou números.', usuario);
      return false;
    } 
    return true;
  }

  function validarCpf(){
    const cpfResultado = new ValidadorCPF(cpf.value);
    if (!cpfResultado.validarCPF()){
      insertAdviceHtml('CPF inválido.', cpf);
      return false;
    }
    return true;
  }

  function insertAdviceHtml(text, element) {
    
    const el = element.parentNode;
    if (el.childElementCount === 2){
      const p = document.createElement('p');
      p.setAttribute('class', 'p-advice');
      p.innerText = text;
      el.appendChild(p);
    } else return;
  }

  function clearInputs() {
    inputs.forEach(element => element.value = '');
  }

  function clearAdvices(){
    const p = document.querySelectorAll('.p-advice');
    p.forEach((element) => {
      const el = element.parentNode;
      el.removeChild(element);
    });
  }
})();
