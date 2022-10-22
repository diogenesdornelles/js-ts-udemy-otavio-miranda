const painel = document.querySelector('.painel');
const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => button.addEventListener('click', addText));

function addText(event){
  let button = event.target.innerHTML;
  painel.innerHTML = button;
}