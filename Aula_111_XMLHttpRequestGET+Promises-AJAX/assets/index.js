// AJAX - ajax asynchronous javascript and xml
// Carregar conteúdo internet, backends, API, etc.
// Códigos HTTP: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
// De 200 a 300 considerado sucesso.
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest



const resultado = document.querySelector('.component');
// Requisita HTML de outra página. Const request é uma função chamada na função load página externa, onde setados os parâmetros.
const request = obj => {

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
    xhr.open(obj.method, obj.url, true); //Param: (GET = requisição http get, URL a ser acessada, método assincrono (true) ou não (false))
    xhr.send(); //se fosse um 'post' que vem de algum formulário, preencher parâmetros.

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText); // submete texto resultado da requisição.
      } else {
        reject({ // encerra a operação.
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    })
  })
}

// Captura evento de clique dos índices da pagina principal.
document.addEventListener('click', e => {
  const el = e.target; 
  const tag = el.tagName.toLowerCase(); 
  if (tag === 'a'){
    e.preventDefault();
    loadPageExternal(el);
  }
})

// Obtém HTML de outra página.
async function loadPageExternal(el) {

  const href = el.getAttribute('href');
  if (href !== '#') {

  const requisitionConfig = {
    method: 'GET',
    url: href,
  }

  try {
      const response = await request(requisitionConfig); // xhr.responseText
      loadResultOnPage(response);
      } catch (e) {
        console.log(e);
  }

  } else {
    resultado.innerHTML = '';
  }
}

// carrega outra página dinamicamente.
function loadResultOnPage(response){
  resultado.innerHTML = response;
}
