function criaOutraFuncao(){
  const nome = 'Luiz';
  return function(){
    return nome;
  }
}

const funcao = criaOutraFuncao();
console.log(funcao); //[Function (anonymous)]
console.log(funcao());