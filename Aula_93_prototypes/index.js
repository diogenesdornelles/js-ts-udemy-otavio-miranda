
// Cadeia sucessória:
// instancia --> Classe.prototype --> Object.prototype
// Se uma função ou attr forem criados diretamento no corpo do objeto, sobrescrevem dados em Classe.prototype ou Object.prototype.

function Pessoa(nome, sobrenome) {
  this.nome =  nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
}

const p1 = new Pessoa('Jojo', 'Dornelles');
const d1 = new Date();

const p2 = Object.assign({}, {nome: 'Tato', sobrenome: 'Dornelles'});

console.dir(p1); // função construtora pessoa e prototype object
console.dir(p2); // Objeto com prototype object

console.dir(d1); 

console.log('############  PROTOTYPE ###############');
console.log(Pessoa.prototype)

/**
 * MÉTODOS HERDADOS DE PROTOTYPE PARA A 'CLASSE'.
 * [[Prototype]]
: 
Object constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (…)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
 * 
 * 
 * MÉTODOS DO CONSTRUTOR
 * 
 * constructor: ƒ Object()
assign: ƒ assign()
create: ƒ create()
defineProperties: ƒ defineProperties()
defineProperty: ƒ defineProperty()
entries: ƒ entries()
freeze: ƒ freeze()
fromEntries: ƒ fromEntries()
getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()
getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()
getOwnPropertyNames: ƒ getOwnPropertyNames()
getOwnPropertySymbols: ƒ getOwnPropertySymbols()
getPrototypeOf: ƒ getPrototypeOf()
hasOwn: ƒ hasOwn()
is: ƒ is()
isExtensible: ƒ isExtensible()
isFrozen: ƒ isFrozen()
isSealed: ƒ isSealed()
keys: ƒ keys()
length: 1
name: "Object"
preventExtensions: ƒ preventExtensions()
prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
seal: ƒ seal()
setPrototypeOf: ƒ setPrototypeOf()
values: ƒ values()
arguments: (…)caller
: (…)
[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]
 * 
 */

Pessoa.prototype.saudacao = 'Olá mundo';
Pessoa.prototype.nomeCompleto = function () {return this.nome + ' ' + this.sobrenome};
console.log(Pessoa.prototype);
console.log(p1.saudacao);
console.log(p1.__proto__);
console.log(p1.nomeCompleto());

