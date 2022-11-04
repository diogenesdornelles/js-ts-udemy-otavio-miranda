//1º Declarar uma função principal que retorna um objeto promise, através do método construtor: new Promise((resolve, reject) func callback);
//2º O Objeto promise dá como resolvida alguma instrução, declarando isso através do método resolve(), que retorna um valor (1º parâmetro);
//3º Caso contrário, rejeita a operação inteira em reject(), nos informando que houve um erro, também através de um valor (2º parâmetro);
//4º O método then(), setado junto à chamada da função principal, captura uma promise como resolvida e, ato contínuo, chama à próxima função da fila.
//5º O método catch() captura, declarada ao final da cadeia, captura qualquer erro ocorrido, encerrando-a.

let cont = 1;

function randomInt(min, max){
  min *= 1000;
  max *= 1000;
  const time = Math.floor(Math.random() * (max - min) + min);
  return time;
}

function connectionDB(msg, tempo, ...args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {if (args.reduce((acc, val) => {return acc += val}, 0) < 10){
      resolve(`${msg}. Time = ${tempo}ms`);
    } else reject(`Exceed 10. Time = ${tempo}ms`);
    }, tempo);
  });
  ;
}

const values1 = [1, 0, 1]
const values2 = [4, 5, 0]
const values3 = [7, 0, 0]


connectionDB('Connecting to DB...1', randomInt(1, 3), values1[0], values1[1], values1[2]) // primeira função
  .then(response => {
    console.log(response + ': ' + '1');
    cont++
    return connectionDB('Searching data...2', randomInt(1, 3), values2[0], values2[1], values2[2]) // segunda função
  })
  .then(response => {
    console.log(response + ': ' + '2');
    cont++
    return connectionDB('Manipulating ...3', randomInt(1, 3), values3[0], values3[1], values3[2]) // terceira função
  })
  .then(response => {
    console.log(response + ': ' + '3');
    cont++
  }).then(() => {
    setTimeout(() => {
      console.log('Show data');
    }, 1000);
  })
  .catch(response => {console.log(response + ': ' + cont)})

// MÉTODO ANTIGO COM CALLBACKS
// function connectionDB(msg, tempo, callback){
//   setTimeout(() =>{
//     console.log(msg, ' - ', tempo + 'ms');
//     if (callback) callback();
//   }, tempo);
// }

// connectionDB('Trying connect...1', randomInt(1, 3), function(){
//   connectionDB('Trying connect...2', randomInt(1, 3), function(){
//     connectionDB('Trying connect...3', randomInt(1, 3));
//   });
// });

console.log('#################################')
// https://www.youtube.com/watch?v=DHvZLI7Db8E

// 1 EXAMPLE
let p = new Promise((resolve, reject) => {
  let a = 1 + 3
  if (a === 2){
    resolve('Success')
  } else reject('Failed')
});

p.then(msg => {
  console.log('This in the then ' + msg)
}).catch(msg => console.log('This in the catch ' + msg))

console.log('#################################')
// 2 EXAMPLE: By callbacks.

// Duas funções são passadas como callback, a primeira de sucesso e a segunda de erro,
// que variam de acordo com os valores das constantes.

const userLeft = false
const userWatchingCatMeme = true

function watchTutorialCallback(callback, errorCallback){
  if (userLeft) {
    errorCallback({
      _name: 'User left',
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      _name: 'User watching Cat Meme',
      message: 'WebDevSimplified < Cat'
    })
  } else {
    callback ('Thumbs up and Subscribed to channel')
  }
}

watchTutorialCallback(
  (message) => {console.log('Sucess: ' + message)},
  (error) => {console.log('Error: ' + error._name + '; ' + error.message)},
)

console.log('#################################')


// 3 EXAMPLE: implemented in promises.

// Os parâmetros callbacks são substituídos por resolve e reject e chamados por then e catch.


function watchTutorialPromise(){
  return new Promise((resolve, reject) => { 
    if (userLeft) {
      reject({
        _name: 'User left',
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        _name: 'User watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      })
    } else {
      resolve ('Thumbs up and Subscribed to channel')
    }
  })
}

watchTutorialPromise().then((message) => {
  {console.log('Sucess: ' + message)}
}).catch((error) => {console.log('Error: ' + error._name + '; ' + error.message)})


console.log('#################################')
// 4 EXAMPLE: 

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 recorded successfully')
}) 

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 recorded successfully')
}) 

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 recorded successfully')
}) 

// retorna todas as promises

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})

// retorna a primeira promise resolvida

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message)
})