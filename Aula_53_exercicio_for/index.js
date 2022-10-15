const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

const greater = [
  { transform: 'scale(10)'}
];

const greaterTiming = {
  duration: 1000,
  iterations: 1,
  transition: 'all ease-in-out',
}

const section = document.querySelector('.container');

function insertHtml() {
  for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const elemento = document.createElement(tag);
    elemento.classList.add("new-elemento");
    elemento.innerHTML = texto;
    section.appendChild(elemento);
  }
}

insertHtml();


