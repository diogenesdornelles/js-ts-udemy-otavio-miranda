function preventSubmit() { 

  const form = document.querySelector('.form'); 
  form.addEventListener('submit', onSubmitForm);
  
  function onSubmitForm(event) { 
    event.preventDefault();
  }
}

preventSubmit();

const timerText = document.querySelector('#timer'); 
let initialTime = new Date('1970-01-01 00:00:00');
let timer;

function updateHtml() {
  timerText.innerHTML = initialTime.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

function setTime(option){
  if (option === 'iniciar') {
    timer = setInterval(function() { 
      initialTime = new Date(initialTime.getTime() + 1000);
      updateHtml();
    }, 1000); 
  } else if (option === 'pausar') {
      setTimeout(function() {
        clearInterval(timer);
      }, 0);
  } else {
      initialTime = new Date('1970-01-01 00:00:00');
      setTimeout(function() {
        clearInterval(timer);
      }, 0);
      updateHtml();
  }
}

