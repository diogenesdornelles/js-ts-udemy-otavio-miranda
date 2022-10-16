const body = document.querySelector('body');
let cont = 0;

function onSubmitForm(event) { 
  event.preventDefault();
}

function newBubble() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', onSubmitForm);
  makeNewBubble();
}

function getBodySize() {
  const width = getComputedStyle(body).width.replace('px', '');
  const height = getComputedStyle(body).height.replace('px', '');
  return [width, height];
}

function generateRandomIntegerInRangeSizeBody(min, max) {
  const size = Math.floor(Math.random() * (max - min + 1)) + min;
  return size;
}

function makeNewBubble() {
  
  cont += 1;
  console.log(cont);
  const bodySize = getBodySize();
  const bubble = document.createElement('div');
  bubble.classList.add("bubble-container");
  bubble.style.top = `${generateRandomIntegerInRangeSizeBody(0, Number(bodySize[1]) - 40)}px`;
  bubble.style.left = `${generateRandomIntegerInRangeSizeBody(0, Number(bodySize[0]) - 40)}px`;
  bubble.style.transition = 'all 1s ease-in-out';
  bubble.style.zIndex = `${cont}`;
  
  bubble.addEventListener('click', function(event) {
  body.removeChild(event.target);})
  body.appendChild(bubble);
  moveBubble(bubble);
}


const moveRight = [
  { transform: 'translate(-100%, -100%)'},
  { transform: 'translate(-47%, -50%)'},
  { transform: 'translate(-50%, -50%)'},
];

const moveRightTiming = {
  duration: 2000,
  iterations: 3,
  transition: 'all ease-in-out',
}

function moveBubble(bubble) {
  bubble.animate(moveRight, moveRightTiming)
}
