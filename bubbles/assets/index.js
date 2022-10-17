function onSubmitForm(event) { 
  event.preventDefault();
}

function startNewBubble() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', onSubmitForm);
  makeNewBubble();
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

function getColor() {
  const color = document.getElementById('color-bubble').value;
  return color;
}

function generateRandomIntegerInRangeSizeBody(min, max) {
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
  constructor(index, classNameCss, size, positionTopInitial, positionLeftInitial, color) {
      this.index = index;
      this.classNameCss = classNameCss;
      this.size = size;
      this.positionTopInitial = positionTopInitial;
      this.positionLeftInitial = positionLeftInitial;
      this.color = color;
  }
}

function manipulateBubbleOnHtml (bubble) {
  const newBubble = document.createElement('div');
  newBubble.classList.add("bubble-container");
  newBubble.classList.add(`bubble-container-${bubble.index}`);
  newBubble.addEventListener('click', function(event) {
  body.removeChild(event.target);
  removeRepoBubble(bubble);
  })
  body.appendChild(newBubble);
  breathBubble(newBubble);
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
                          generateRandomIntegerInRangeSizeBody(0, bodySize[1] - bubbleSize),
                          generateRandomIntegerInRangeSizeBody(0, bodySize[0] - bubbleSize),
                          color = getColor(), 
                          );
  return bubble;
}
 
function addRepoBubble(bubble) {
  repo.push(bubble);
}

function removeRepoBubble(bubble) {
  const indexBubble = repo.indexOf(bubble);
  if (indexBubble > -1) { 
    repo.splice(indexBubble, 1);
  }
}


function makeNewBubble() { 
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
  manipulateBubbleOnHtml(bubble);
  addRepoBubble(bubble);
  // takePosition(bubble);
}

const grouthBubble = [
  { transform: 'scale(1)'},
  { transform: 'scaleX(1.03)'},
  { transform: 'scaleY(1.03)'},
  { transform: 'scale(1)'},
];

const grouthBubbleTiming = {
  duration: 2000,
  iterations: 100000,
  transition: 'all ease-in-out', 
}

function breathBubble(bubble) {
  bubble.animate(grouthBubble, grouthBubbleTiming)
}
