function onSubmitForm(event) { 
  event.preventDefault();
}

function startNewBubble() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', onSubmitForm);
  setNewBubble();
}

const body = document.querySelector('body');

function getBodySize() {
  const width = Number(getComputedStyle(body).width.replace('px', ''));
  const height = Number(getComputedStyle(body).height.replace('px', ''));
  console.log(width, height);
  return [width, height];
}

let bodySize = getBodySize();

let cont = 0;

let repo = [];

function getBubbleSize() {
  const size = Number(document.querySelector('#bubble-size').value); 
  return size; 
}

function getBubbleVelocity() {
  const velocity = Number(document.querySelector('#velocity').value); 
  return Number(velocity ); 
}

function getColor() {
  const color = document.getElementById('color-bubble').value;
  return color;
}

function generateRandomIntegerInRange(min, max) {
  const position = Math.floor(Math.random() * (max - min + 1)) + min;
  return position;
}
 
function createClassCssForNewBubble(className, regras) {
  var style = document.createElement('style');
  document.getElementsByTagName('head')[0].appendChild(style);
  if(!(style.sheet||{}).insertRule) 
      (style.styleSheet || style.sheet).addRule(className, regras);
  else
      style.sheet.insertRule(className+"{"+regras+"}",0);
}

class Bubble {
  constructor(index, classNameCss, size, positionTopInitial, positionLeftInitial, color, velocity, isActive=true) {
      this.index = index;
      this.classNameCss = classNameCss;
      this.size = size;
      this.positionTopInitial = positionTopInitial;
      this.positionLeftInitial = positionLeftInitial;
      this.color = color;
      this.velocity = velocity;
      this.isActive = isActive;
  }
}

function createBubbleOnHtml (bubbleObj) {
  const elementNewBubble = document.createElement('div');
  elementNewBubble.classList.add("bubble-container");
  elementNewBubble.classList.add(`bubble-container-${bubbleObj.index}`);
  body.appendChild(elementNewBubble);
  breathBubble(elementNewBubble);
  moveBubbles(elementNewBubble, bubbleObj);
  elementNewBubble.addEventListener('click', function(event) {
    body.removeChild(event.target);
    removeRepoBubble(bubbleObj);
    });
  elementNewBubble.addEventListener('mouseover', function() {
    animateTouch(elementNewBubble);
    });
}

function factoryBubble() {
  let bubbleSize = getBubbleSize();
  let bubble = new Bubble(
                          cont,
                          `.bubble-container-${cont}`,
                          {
                            width: bubbleSize,
                            height: bubbleSize,
                          },
                          positionTopInitial = generateRandomIntegerInRange(0, bodySize[1] - bubbleSize),
                          positionLeftInitial = generateRandomIntegerInRange(0, bodySize[0] - bubbleSize),
                          color = getColor(), 
                          velocity = getBubbleVelocity(),
                          );
  return bubble;
}
 
function addRepoBubble(bubble) {
  repo.push(bubble);
  updateScore(repo.length);
}

function removeRepoBubble(bubble) {
  const indexBubble = repo.indexOf(bubble);
  if (indexBubble > -1) { 
    repo.splice(indexBubble, 1);
  }
  updateScore(repo.length);
}

function updateScore(numberBubbles) {
  const score = document.querySelector('.score p');
  score.innerHTML = numberBubbles;
}

function setBubbleAtualPosition(bubble) {
  let rect = document.querySelector(`.bubble-container-${bubble.index}`).getBoundingClientRect();
  bubble.atualPositionTop = rect.top;
  bubble.atualPositionLeft = rect.left;
  bubble.atualPositionRight = rect.right;
  bubble.atualPositionBotton = rect.bottom;
}


function setNewBubble() { 
  cont += 1;
  const bubble = factoryBubble();
  createClassCssForNewBubble(`.bubble-container-${bubble.index}`, 
                  `position: absolute;
                   top: ${bubble.positionTopInitial}px;
                   left: ${bubble.positionLeftInitial}px;
                   background-color: ${bubble.color};
                   z-index: ${cont};
                   width: ${bubble.size.width}px;
                   height: ${bubble.size.height}px;
                   opacity: .7;
                   filter: blur(1);
                  `);
  createBubbleOnHtml(bubble);
  setBubbleAtualPosition(bubble);
  addRepoBubble(bubble);
}

const grouthBubble = [
  { transform: 'scale(1)'},
  { transform: 'scaleX(1.03)'},
  { transform: 'scaleY(1.03)'},
  { transform: 'scale(1)'},
];

const grouthBubbleTiming = {
  duration: 2000,
  iterations: Infinity,
  transition: 'all ease-in-out', 
}

function breathBubble(bubble) {
  bubble.animate(grouthBubble, grouthBubbleTiming)
}

function animateTouch(bubble) {
  let shakeBubble;
  let shakeBubbleTiming;
  bubble.animate(shakeBubble = [
    { transform: 'scale(1)'},
    { transform: 'scaleX(1.3)'},
    { transform: 'scaleY(1.3)'},
    { transform: 'scale(1)'},
    { transform: 'scaleX(1.2)'},
    { transform: 'scaleY(1.2)'},
    { transform: 'scale(1)'},
    { transform: 'scaleX(1.1)'},
    { transform: 'scaleY(1.1)'},
    { transform: 'scale(1)'},
  ], 
    shakeBubbleTiming = {
      duration: 1000,
      iterations: 1,
      ease: 'cubicBezier(.5, .05, .1, .3)', 
    })
}

function moveBubbles(elementNewBubble, bubbleObj) {
  let moveBubble;
  let moveBubbleTiming;
  let integerX;
  let integerY;
  console.log(bubbleObj.velocity)
  elementNewBubble.animate(moveBubble = [
    { transform: 'translate(0)'},
    { transform: `translate(${integerX = generateRandomIntegerInRange(0, bodySize[0] - bubbleObj.size.width)}px, ${integerY = generateRandomIntegerInRange(0, bodySize[1] - bubbleObj.size.height)}px)`},
    { transform: 'translate(0)'},
    { transform: `translate(${integerX = generateRandomIntegerInRange(0, bodySize[0] - bubbleObj.size.width)}px, ${integerY = generateRandomIntegerInRange(0, bodySize[1] - bubbleObj.size.height)}px)`},
    { transform: 'translate(0)'},
    { transform: `translate(${integerX = generateRandomIntegerInRange(0, bodySize[0] - bubbleObj.size.width)}px, ${integerY = generateRandomIntegerInRange(0, bodySize[1] - bubbleObj.size.height)}px)`},
    { transform: 'translate(0)'},
    { transform: `translate(${integerX = generateRandomIntegerInRange(0, bodySize[0] - bubbleObj.size.width)}px, ${integerY = generateRandomIntegerInRange(0, bodySize[1] - bubbleObj.size.height)}px)`},
  ] , moveBubbleTiming = {
      duration: Math.trunc(30000 / bubbleObj.velocity),
      iterations: Infinity,
      ease: 'cubicBezier(.5, .05, .1, .3)', 
  });
} 

