
function generateRandomInteger(min, max) {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

function f1(callback){
  let timer1;
  setTimeout(function(){
    console.log('Sou f1', timer1 + 'ms');
    if (callback) callback();
  }, timer1 = generateRandomInteger(1000, 3000))
}

function f2(callback){
  let timer2;
  setTimeout(function(c){
    console.log('Sou f2', timer2 + 'ms');
    if (callback) callback();
  }, timer2 = generateRandomInteger(1000, 3000))
}

function f3(callback){
  let timer3;
  setTimeout(function(){
    console.log('Sou f3', timer3 + 'ms');
    if (callback) callback();
  }, timer3 = generateRandomInteger(1000, 3000))
}

// Funções de callback. Estabelece ordem na execução. Callback-hell.

// Via funções anônimas:
//f1(function(){
//  f2(function(){
//    f3(function(){
//      console.log('Olá mundo')})
//  })
//});

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
