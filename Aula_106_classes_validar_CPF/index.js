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

const cpf = new ValidadorCPF('055.011.809-87');
console.log(cpf.validarCPF());