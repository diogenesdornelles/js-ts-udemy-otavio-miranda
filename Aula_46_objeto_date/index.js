// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date(); //DateConstructor

console.log(data); // 2022-10-12T02:43:19.652Z

console.log(data.toString()); // Tue Oct 11 2022 23:41:39 GMT-0300 (Horário Padrão de Brasília)

console.log(Date.now()); // retorna milissegungos desde 01/01/1970

const date = new Date().getDate(); // retorna dia

const month = new Date().getMonth(); // retorna mês

const year = new Date().getFullYear(); // retorna a ano

const hours = new Date().getHours(); // retorna hora

const minutes = new Date().getMinutes(); // retorna minuto

const day = new Date().getDay(); // retorna dia da semana: 0 a 6 (domingo a sábado)

// new Date(); retorna time atual
// new Date(valor); milésimo de segundos
// new Date(dataString); 
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

// Retornar idade:
function getAge (dataStringBirthday) {
  const oneDayMs = 86400000;
  const idadeMs = Date.now() - dataStringBirthday; 
  const numberDays = (idadeMs/oneDayMs).toFixed();
  const age = Math.trunc(numberDays/365);
  return age;
}

const myBirthday = new Date('1985-03-17 03:15:00');
const myAge = getAge(myBirthday);
console.log(myAge); 

// Verificar tempo decorrido

const inicio = Date.now();

// Make some thing.

const fim = Date.now();

const decorrido = fim - inicio; //

console.log(decorrido); 

