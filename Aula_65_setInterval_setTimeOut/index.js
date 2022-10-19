function mostraHora() {
  let data = new Date();
  return data.toLocaleDateString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

// Contador com timer (função, tempo)
const timer = setInterval(function() { 
  console.log(mostraHora())
}, 1000); 




// Para o contador (função, tempo)
setTimeout(function() {
  clearInterval(timer);
}, 4000);

setTimeout(function() {
  console.log('Olá mundo!');
}, 5000);
