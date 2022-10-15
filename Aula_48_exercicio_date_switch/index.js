/* 
-------- 1ª FORMA ----------------------------------------------------------------
function getDiaSemana() {
  let diaSemanaTexto;
  switch (new Date().getDay()) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda-Feira";
      break;
    case 2:
      diaSemanaTexto = "Terça-Feira";
      break;
    case 3:
      diaSemanaTexto = "Quarta-Feira";
      break;
    case 4:
      diaSemanaTexto = "Quinta-Feira";
      break;
    case 5:
      diaSemanaTexto = "Sexta-Feira";   
      break;     
    case 6:
      diaSemanaTexto = "Sábado";
      break;
    default:
      diaSemanaTexto = '';
      break;
  }
  return diaSemanaTexto;
}

function getMes() {
  let mes;
  switch (new Date().getMonth()) {
    case 0:
      mes = "Janeiro"
      break;
    case 1:
      mes = "Fevereiro"
      break;
    case 2:
      mes = "Março"
    case 3:
      mes = "Abril"
      break;
    case 4:
      mes = "Maio"
      break;
    case 5:
      mes = "Junho"
      break;
    case 6:
      mes = "Julho"
      break;
    case 7:
      mes = "Agosto"
      break;
    case 8:
      mes = "Setembro"
      break;
    case 9:
      mes = "Outubro"
      break;
    case 10:
      mes = "Novembro"
      break;
    case 11:
      mes = "Dezembro"
      break;
  }
  return mes;
}

function setTime() {

  const h1 = document.querySelector('h1');

  const data = new Date();

  const diaSemanaTexto = getDiaSemana();

  const mes = getMes();
  
  const date = data.getDate();

  const ano = data.getFullYear();

  const hora = zeroEsquerda(data.getHours());

  const minuto = zeroEsquerda(data.getMinutes());

  const segundo = zeroEsquerda(data.getSeconds());

  h1.innerText = `${diaSemanaTexto}, ${date} de ${mes} de ${ano}, ${hora}:${minuto}:${segundo}`;

}

function zeroEsquerda (number) {
  return `${number}`.length === 1 ? `0${number}` : `${number}`;
}

setTime();

-------- 2ª FORMA ----------------------------------------------------------------


function getDiaSemanaTexto(diaSemana) {
  const diasSemana = ['domingo', 'segunda, 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
  return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro, 'novembro', 'dezembro'];
  return meses[numeroMes];
}

function zeroEsquerda (number) {
  return `${number}`.length === 1 ? `0${number}` : `${number}`;
}

function setTime() {

  const h1 = document.querySelector('h1');

  const data = new Date();

  const diaSemanaTexto = getDiaSemanaTexto(data.getDay());

  const mes = getNomeMes(data.getMonth());
  
  const date = data.getDate();

  const ano = data.getFullYear();

  const hora = zeroEsquerda(data.getHours());

  const minuto = zeroEsquerda(data.getMinutes());

  const segundo = zeroEsquerda(data.getSeconds());

  h1.innerText = `${diaSemanaTexto}, ${date} de ${mes} de ${ano}, ${hora}:${minuto}:${segundo}`;

}

setTime();

*/
function setTime() {
  const h1 = document.querySelector('h1');
  const data = new Date();
  const option = {
    second: ('2-digit' || 'numeric'),
    minute: ('2-digit' || 'numeric'),
    hour: ('2-digit' || 'numeric'), 
    day: ('2-digit' || 'numeric'), 
    weekday: ('long' || 'narrow' || 'short'),
    month: ('long' || 'narrow' || 'numeric' || '2-digit' || 'short'),
    year: ('numeric' || '2-digit'),
    era: ('short' || 'long'),
    timeZoneName: ('short' || 'long')
  };

  h1.innerText = data.toLocaleDateString('pt-BR', option);

}

setTime();

