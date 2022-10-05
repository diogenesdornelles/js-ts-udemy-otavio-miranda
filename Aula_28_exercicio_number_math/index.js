const num = Number(window.prompt('Digite um número: '));

const numeroTitulo = window.document.getElementById('numero-escolhido'); // seleciona o elemento inteiro: "<span id="numero-escolhido">0</span>"

const textoInfo = window.document.getElementById('texto-info'); // <div id="texto-info">Texto</div>

numeroTitulo.innerHTML = `${num}`;
textoInfo.innerHTML = `<p>Seu número mais 2 é: ${num + 2} </p> 
                      <p>Raiz quadrada é: ${Math.sqrt(num)} </p>
                      <p>${num} é inteiro: ${Number.isInteger(num)} </p>
                      <p>${num} é NaN: ${Number.isNaN(num)} </p>
                      <p>Arredondado para baixo: ${Math.floor(num)} </p>
                      <p>Arredondado para cima: ${Math.ceil(num)} </p>
                      <p>Arredondado para cima: ${num.toFixed()} </p>`; // innerHTML insere elemento html ao body.
