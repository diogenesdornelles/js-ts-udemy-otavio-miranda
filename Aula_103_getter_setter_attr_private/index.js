// symbol

const _velocidade = Symbol('velocidade');

class Carro {

  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0; // atributo privado.
  }

  get velocidade(){
    return this[_velocidade];
  }

  set velocidade(valor){
    if (typeof valor !== 'number') return;
    if (valor < 0 || valor > 100) return;
    this[_velocidade] += valor;
  }
  
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

