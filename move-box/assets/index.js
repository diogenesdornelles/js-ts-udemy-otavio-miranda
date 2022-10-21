document.onkeydown = checkKey;

const div = document.querySelector(".box");
let leftKey = '37', upKey = '38', rightKey = '39', downKey = '40';
let qtnPixelsMove = 20;

function getPositionX() {
  let position = div.getClientRects()[0];
  return position.x;
}

function getPositionY() {
  let position = div.getClientRects()[0];
  return position.y;
}

function moveUp() {
  let positionY = getPositionY();
  positionY = positionY - qtnPixelsMove;
  div.style.top = `${positionY}px`;
  deformBollY()
}

function moveDown(){
  let positionY = getPositionY();
  positionY = positionY + qtnPixelsMove;
  div.style.top = `${positionY}px`;
  deformBollY()
}

function moveLeft(){
  let positionX = getPositionX();
  positionX = positionX - qtnPixelsMove;
  div.style.left = `${positionX}px`;
  deformBollX()
}

function moveRight(){
  let positionX = getPositionX();
  positionX = positionX + qtnPixelsMove;
  div.style.left = `${positionX}px`;
  deformBollX()
}

function deformBollX(){
  div.style.transition = 'all ease-in-out';
  div.style.transform = `scale(${(1 + qtnPixelsMove/100) * 1}, ${(1 - qtnPixelsMove/100) * 1})`;
}

function deformBollY(){
  div.style.transition = 'all ease-in-out';
  div.style.transform = `scale(${(1 - qtnPixelsMove/100) * 1}, ${(1 + qtnPixelsMove/100) * 1})`;
}

function checkKey(event) {
  event = event || window.event;
  if (event.keyCode == upKey) {
    console.log(event)
      moveUp()
  }
  else if (event.keyCode == downKey) {
    console.log(event)
      moveDown()
  }
  else if (event.keyCode == leftKey) {
    console.log(event)
      moveLeft()
  }
  else if (event.keyCode == rightKey) {
    console.log(event)
      moveRight()
  }
}
