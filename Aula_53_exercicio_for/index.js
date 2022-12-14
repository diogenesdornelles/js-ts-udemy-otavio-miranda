const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

const section = document.querySelector('.container');

function insertHtml() {
  for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const elemento = document.createElement(tag);
    elemento.classList.add("new-elemento");
    let textoCriado = document.createTextNode(texto);
    elemento.appendChild(textoCriado);
    elemento.style = "box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1)";
    elemento.addEventListener('click', function(event) {
      event.target.classList.add("fullscreen");
    });
    elemento.addEventListener('mouseout', function(event) {
      event.target.classList.remove("fullscreen");
    });
    section.appendChild(elemento);
  }
}

insertHtml();


