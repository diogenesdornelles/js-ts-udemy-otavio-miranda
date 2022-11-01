
console.log('############  CRIAR OBJETOS ###############');
const produto = { nome: 'caneca', preco: 1.8 };
const outroProduto = { ...produto, material: 'porcalena' }; // copiar objeto por spread operator.
const maisUmProduto = Object.assign({}, produto); // target e alvo.
const ultimoProduto = { nome: produto.nome, preco: produto.preco };
const ultimoProdutoDeVerdade = new Object(produto);
const mainUmultimoProdutoDeVerdade = Object.create(null, {
  nome: {
    value: 'Bermuda',
    writable: true,
    configurable: false,
    enumerable: true,
  },
  estoque: {
    value: 10,
    writable: true,
    configurable: false,
    enumerable: true,
  },
});

console.log(mainUmultimoProdutoDeVerdade);

console.log('############  MOSTRAR CHAVES ###############');
console.log(Object.keys(produto));

console.log('############  CONGELAR ATRIBUTO ###############');
console.log(Object.freeze(produto.preco));

console.log('############  MOSTRAR PREPERTY(IES) ###############');
console.log(Object.freeze(Object.getOwnPropertyDescriptor(produto, 'nome')));

console.log('############  MOSTRAR VALUES ###############');
console.log(Object.values(produto));

console.log('############  MOSTRAR ENTRIES ###############');
console.log(Object.entries(produto)); // retorna um array.

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
