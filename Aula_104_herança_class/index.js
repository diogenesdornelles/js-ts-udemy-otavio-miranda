class EletronicDevice {
  constructor(_name, value, qtn){
    this._name = _name;
    this.value = value;
    this.qtn = qtn;
    this.switchedOn = false;
  }

  turnOnDevice(){
    if (this.switchedOn === true) return;
    this.switchedOn = true;
  }

  turnOffDevice(){
    if (this.switchedOn === false) return;
    this.switchedOn = false;
  }
}

class Smartphone extends EletronicDevice {
  
  constructor(_name, value, qtn, brand, size, number) {
    super(_name, value, qtn); // Need call constructor super class 
    this.brand = brand;
    this.size = size;
    this.number = number;
  }
}

const s1 = new Smartphone('Galaxy S10 Plus', 2000, 1, 'Samsung', '12 inches', '00-00000-0000');  
console.log(s1);

class Tablet extends EletronicDevice {
  
  constructor(_name, value, qtn, brand, size) {
    super(_name, value, qtn); // Need call constructor super class 
    this.brand = brand;
    this.size = size;
  }
}

const s2 = new Tablet('Galaxy Tab', 2500, 1, 'Samsung', '12 inches');  
console.log(s2);

class ShoppingCart {
  constructor(){
    this.repo = [];
    this.cont = 1;
  }

  addToChart(...items){
    for (let item of items) {
      this.repo.push(item);
      this.cont++;
    }
  }

  removeItemChart(index){
    delete this.repo[index];
  }

  totalValue(){
    if (this.repo !== {}){
      const total = this.repo.reduce((acc, current) => {
        acc += current.value * current.qtn;
        return acc;
      }, 0)
      return `R$ ${total}`;
    }
  }

  totalItems(){
    if (this.repo !== {}){
      const total = this.repo.reduce((acc, current) => {
        acc += current.qtn;
        return acc;
      }, 0)
      return total;
    } return 0;
  }
}

const cart = new ShoppingCart();

cart.addToChart(s1, s2);
console.log(cart.repo);
console.log(cart.totalValue());

class Person{
  constructor(_name){
    this.nome = _name;
    this.phone = new Smartphone('Iphone 13', 4000, 1, 'Iphone', '8 inches', '11-11111-1111');  
  }
  callparent(parent){
    console.log(`${this.nome} is calling her ${parent} from her phone ${this.phone._name}.`)
  }
}

const person = new Person('Joana');
person.callparent('Father');