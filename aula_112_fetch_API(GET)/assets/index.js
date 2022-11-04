// // FETCH API
// // fetch retorna por padrão uma promise


// MÉTODO 01 COM FETCH API SEM ASYNC
// const resultado = document.querySelector('.component');

// const request = obj => {
//   fetch(obj.url) 
//   .then(response => {
//     if (response.status !== 200) throw new ErrorEvent('ERRO 404.');
//     return response.text();
//   })
//   .then(html => {
//     loadResultOnPage(html);
//   })
//   .catch(e =>
//     console.log(e));
//   }

// // Captura evento de clique dos índices da pagina principal.
// document.addEventListener('click', e => {
//   const el = e.target; 
//   const tag = el.tagName.toLowerCase(); 
//   if (tag === 'a'){
//     e.preventDefault();
//     loadPageExternal(el);
//   }
// })

// // Obtém HTML de outra página.
// function loadPageExternal(el) {

//   const href = el.getAttribute('href');
//   if (href !== '#') {

//   const requisitionConfig = {
//     url: href,
//   }

//   request(requisitionConfig)

//   } else {
//     resultado.innerHTML = '';
//   }
// }

// // carrega outra página dinamicamente.
// function loadResultOnPage(response){
//   resultado.innerHTML = response;
// }

// MÉTODO 02 COM FETCH API COM ASYNC

const resultado = document.querySelector('.component');

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
      url: href,
    }

    try {
      const response = await fetch(requisitionConfig.url); // primeira promise para carregar html
      if (response.status !== 200) throw new ErrorEvent('ERRO 404.');
      const text = await response.text(); // segunda promise para obter o texto.
      loadResultOnPage(text);
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