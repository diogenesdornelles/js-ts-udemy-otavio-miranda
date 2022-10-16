const body = document.querySelector('body');
const bodyBackgroundColor = getComputedStyle(body).backgroundColor;
console.log(bodyBackgroundColor);

const paragrafos = document.querySelectorAll('.paragrafos p');
paragrafos.forEach((element) => {
  element.style.backgroundColor = bodyBackgroundColor;
  element.style.color = '#FFF';
});