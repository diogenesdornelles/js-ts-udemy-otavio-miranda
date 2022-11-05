// AXIOS <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
// https://github.com/axios/axios


// With fetch API
// fetch('./assets/pessoas.json')
//   .then(response => response.json())
//   .then(json => insertDataTable(json))

// With AXIOS

axios('./assets/pessoas.json')
.then(response => {
  response.data.sort((data2, data1) => {
    console.log(data2)
    if (data1.nome.toLowerCase() > data2.nome.toLowerCase()) {
      return -1;
    }
    if (data1.nome.toLowerCase() < data2.nome.toLowerCase()) {
      return 1;
    }
    return 0;
  })
  mainApplication(response.data)})
.catch(error => console.log(error))

// mainApplication(response.data)


function mainApplication(json) {
  
  const allDB = json;

  const table = document.querySelector('.table');

  const form = document.querySelector('form');
  form.addEventListener('click', handleSubmit);

  const btn1 = document.querySelector('#btn-search');
  btn1.addEventListener('click', handleSearch);

  const btn2 = document.querySelector('#btn-load');
  btn2.addEventListener('click', reinitialize);
  
  function handleSubmit(e) {
    e.preventDefault();
  }
  
  function crtEl(el){
    return document.createElement(el);
  }
  
  function addAttr(el, attr, ...values){
    el.setAttribute(attr, values[0]);
    if (values.length > 1 && attr === 'class') {
      values.shift()
      for (let value of values) {
        el.classList.add(value);
      }
    }
  }
  
  function elAddContent(el, content){
    el.innerHTML = content;
  }
  
  function elAppenParent(el, parent) {
    parent.appendChild(el);
  }
  
  function creatCells(keysNames, el){
    const obj = {};
    for (let keyName of keysNames) {
      obj[keyName] = crtEl(el);
    }
    return obj;
  }
  
  function renderDataOnTable(data){
  
    for (let value of data) {
    
      const row = crtEl('ul');
  
      addAttr(row, 'class', 'row', 'row-body');
  
      let keysNames = [];
      for (let key in value) {
        keysNames.push(key);
      }
  
      const oneRowCell = creatCells(keysNames, 'li')
  
      for (let key in oneRowCell) {
        addAttr(oneRowCell[key], 'class', 'cell', 'cell-body');
      }
  
      for (let key in oneRowCell){
        elAddContent(oneRowCell[key], value[key]);
      }
  
      elAppenParent(row, table);
      
      for (let key in oneRowCell) {
        elAppenParent(oneRowCell[key], row);
      }
    }
  }

  function clearTable(){
    const rows = document.querySelectorAll('.row-body');
    rows.forEach(value => table.removeChild(value));
  }

  function handleSearch() {
    const inputs = document.querySelector('#text-search').value.split(' ');
    let searchResult = [];
    for (let value of allDB){
      for (let input of inputs){
        if (value.nome.toLowerCase() === input.toLowerCase().trim()){
          searchResult.push(value);
        }
        if (value.cpf.toLowerCase() === input.toLowerCase().trim()){
          searchResult.push(value);
        }
        if (value.empresa.toLowerCase() === input.toLowerCase().trim()){
          searchResult.push(value);
        }
        if (value.estado.toLowerCase() === input.toLowerCase().trim()){
          searchResult.push(value);
        }
      };
    }
    searchResult = [...new Set(searchResult)];
    clearTable();
    renderDataOnTable(searchResult);
  }

  renderDataOnTable(allDB);

  function reinitialize(){
    renderDataOnTable(allDB);
  }
}


