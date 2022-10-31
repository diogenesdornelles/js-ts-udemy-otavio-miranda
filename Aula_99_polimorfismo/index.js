function Conta(agencia, conta, saldo){
  
  var _saldo = saldo;

  this.getSaldo = function() {
    return(_saldo);
  }

  this.setSaldo = function(valor) {
    _saldo += valor;
  }

  Object.defineProperties(this, {
    agencia: {
      value: agencia,
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },

    conta: {
      value: conta,
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
  })
};

Conta.prototype.sacar = function(valor){
  if (this.saldo >= valor) {
    this.setSaldo(-valor);
    this.verSaldo()
  };
};

Conta.prototype.depositar = function(valor){
  this.setSaldo(valor);
  this.verSaldo();
};

Conta.prototype.verSaldo = function(){
  console.log(`Ag/c: ${this.agencia}/${this.conta}: ${this.getSaldo().toFixed(2)}`)
};

const conta1 = new Conta('11-1', '1526-0', 100);
console.log(conta1);
conta1.setSaldo(1000);
conta1.depositar(100);
