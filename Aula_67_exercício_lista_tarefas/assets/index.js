const form = document.querySelector('.form'); 

function preventSubmit() {
  form.addEventListener('submit', onSubmitForm);
  function onSubmitForm(event) { 
  event.preventDefault();
  }
}

const table = document.querySelector('.table'); 
const inputAdd = document.querySelector('#enviar-tarefa'); 
inputAdd.addEventListener('click', getTextoTarefa);
inputAdd.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    getTextoTarefa();
  }
});

function getTextoTarefa() {
  const inputTarefa = document.querySelector('#nova-tarefa');
  if (inputTarefa.value === "") {
    alert('Tarefa não definida.');
    } else {
      inserTarefaOnHtml(inputTarefa.value);
    }
  clearInputs(inputTarefa);
}

function clearInputs(inputTarefa) {
  form.reset();
  inputTarefa.focus();
}

function inserTarefaOnHtml(text) {
  let newDivItem = createElements('div');
  addAttr(newDivItem, 'class', 'item');
  let newPTarefa = createElements('p');
  newPTarefa.innerHTML = text;
  let newInputApagarTarefa = createElements('input');
  addAttr(newInputApagarTarefa, 'type', 'submit');
  addAttr(newInputApagarTarefa, 'value', 'Excluir tarefa');
  addAttr(newInputApagarTarefa, 'id', 'excluir-tarefa');
  newInputApagarTarefa.addEventListener('click', removerTarefa);
  newDivItem.appendChild(newPTarefa);
  newDivItem.appendChild(newInputApagarTarefa);
  table.appendChild(newDivItem);

  function addAttr(element, attr, value) {
    element.setAttribute(attr, value);
  }

  function createElements(element) {
    const newElement = document.createElement(`${element}`);
      return newElement;
  }
  attTarefas();
}

function removerTarefa(event) {
  const inputRemove = event.target; 
  const div = inputRemove.parentNode;
  table.removeChild(div);
  attTarefas();
}

function attTarefas() {
  const tarefas = document.querySelectorAll('.lista-tarefas .table .item p'); 
  const listaTarefas = [];
  for (let tarefa of tarefas) {
    listaTarefas.push(tarefa.innerHTML);
  }
  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaTarefas = JSON.parse(tarefas);
  for (let tarefa of listaTarefas) {
    inserTarefaOnHtml(tarefa);
  }
}

preventSubmit();
addTarefasSalvas();
