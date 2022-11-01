function Conta(agencia, conta, saldo) {

  // Saldo is private. Not in obj. context. Only in acessors methods.
  this.getSaldo = function(){
    return saldo;
  }

  this.setSaldo = function(valor){
    saldo += valor;
    this.verSaldo();
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
    
    saldo:{ // this.saldo é acessível, mas não pose ser setado e valor corresponde à variável privada saldo.
      value: this.getSaldo(),
      enumerable: true, 
      writable: false, 
      configurable: false, 
    }
  })
};

Conta.prototype.sacar = function(valor){
  if (this.getSaldo() >= valor) {
    this.setSaldo(-valor);
  } else console.log('Valor indisponível para saque.');
};

Conta.prototype.depositar = function(valor){
  this.setSaldo(valor);
};

Conta.prototype.verSaldo = function(){
  console.log(`Ag/c: ${this.agencia}/${this.conta}: R$ ${this.getSaldo().toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo);
  //Object.setPrototypeOf(this, Conta.prototype); Setar no objeto.
  Object.defineProperties(this, {
    limite: {
      value: limite || 1000, 
      enumerable: true, 
      writable: true, 
      configurable: false, 
    },
  });
};

Object.setPrototypeOf(ContaCorrente.prototype, Conta.prototype);

//ContaCorrente.prototype = Object.create(Conta.prototype);
//ContaCorrente.prototype.constructor = ContaCorrente;


// Médoto superclasse sobrescrito. Polimorfismo. Método depositar permanece o mesmo.
Conta.prototype.sacar = function(valor){
  if (this.getSaldo() + this.limite >= valor) {
    this.setSaldo(-valor);
  } else console.log('Valor indisponível para saque.');
};

const conta1 = new ContaCorrente('11-1', '1526-0', 10, 500);
conta1.saldo = 10000000000;
console.log(conta1.saldo);
conta1.depositar(100);
conta1.sacar(400);
conta1.setSaldo(-50);
