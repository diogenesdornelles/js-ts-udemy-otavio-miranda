const form = document.querySelector('.form'); 
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) { 
event.preventDefault();
}

const timerText = document.querySelector('#timer'); 
let initialTime = new Date('1970-01-01 00:00:00');
let timer;

console.log(timer)

function updateHtml() {
  timerText.innerHTML = initialTime.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  updateColor('inherit');
}

function updateColor(color) {
  timerText.style.color = color;
}

function startClock() { 
  clearInterval(timer);
  timer = setInterval(getSeconds, 1000);
}

function getSeconds() { 
  initialTime = new Date(initialTime.getTime() + 1000);
  updateHtml(); 
}

function pauseClock() {
    clearInterval(timer);
}

function toZeroClock() {
  clearInterval(timer);
  initialTime = new Date('1970-01-01 00:00:00');
}

// called directly on tag input HTML, with parameters = 'iniciar' || 'pausar'|| 'null';
function setTime(option){
  if (option === 'iniciar') {
    startClock()
    return
  } else if (option === 'pausar') {
      pauseClock()
      updateColor('red');
    return
  } else {
      toZeroClock()
      updateHtml();
  }
}

/* 
OM solução:

function criaHoraSegundos(segundos) {
  const data = new Date(segungos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const timerText = document.querySelector('#timer'); 
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let segundos = 0;

function iniciaRelogio() {
  const timer = setInterval(function() {
    segundos++;
    timerText.innerHTML = criaHoraSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function(event) { 
  iniciaRelogio()
}

pausar.addEventListener('click', function(event) { 
  clearInterval(timer);
}

zerar.addEventListener('click', function(event) { 
  clearInterval(timer);
  timerText.innerHTML = '00:00:00';
}

// outra forma de usar o escutador:

document.eventListener('click', function(event) {
  console.log(event.target); // Vai mostrar qual elemento foi clicado em todo o documento.
  const el = event.target; // guarda o elemento na variável.
  (segue código com as condicionais)
});

*/