let init = performance.now();
let final;

function randomInt(min, max){
  min *= 1000
  max *= 1000
  const time = Math.floor(Math.random() * (max - min) + min)
  return time
}

function wait(msg, time){
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false)
    setTimeout(() => {resolve(msg)}, time)
  })
}

function measurePerfomance(){
  final = performance.now();
  const time = final - init
  return time
}

const promises = [
  'Executing...',
  wait('Connecting to DB...1', randomInt(1, 3)),
  wait('Searching data...2', randomInt(1, 3)),
  wait(1, randomInt(1, 3)),
  wait('Showing results...1', randomInt(1, 3)),
  'Finalizing Application',
  measurePerfomance(),
]

console.log('############# Promise.all ####################')
// Retornando todas as promises resolvidas: .resolve()
Promise.all(promises).then(function(valor){
  console.log(valor)
}).catch(function(err){
  console.log(err)
})

console.log('############## Promise.race ###################')
// Retornando priemiro promise resolvida: .race()
Promise.race(promises).then(function(valor){
  console.log(valor)
})

console.log('############## Promise.resolve ###################')
// Retornando promise já resolvida: .resolve()

const _inCache = false

function inCache() {
  if (_inCache) {
    return Promise.resolve('Page already loaded in cache.')
  } else {
    return wait('Loading page...1', randomInt(1, 3))
  }
}

inCache().then((message) => {
  console.log(message)
})