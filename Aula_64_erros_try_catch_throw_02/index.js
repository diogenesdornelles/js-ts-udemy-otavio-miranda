try {
  // É executada quando não há erros.
} catch {
  // É executada quando há erros.
} finally {
  // Sempre é executado.
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Data must be a Date object');
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

try {
  const hora = retornaHora(1522);
  console.log(hora);
} catch (err) {
  console.log('Hora válida deve ser fornecida.');
} finally {
  console.log('Tenha um bom dia')
}
