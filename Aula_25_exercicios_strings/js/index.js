const nome = window.prompt('Digite seu nome completo:')
// window.document.write('Digitar alguma coisa') window = objeto janela; document = documento HTML aberto.
window.document.body.innerHTML += `Seu nome é ${nome} <br>`
window.document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>`
window.document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]} <br>`
window.document.body.innerHTML += `O primeiro índice da letra 'a' do seu nome é ${nome.indexOf('o')} <br>`
window.document.body.innerHTML += `O último índice da letra 'a' do seu nome é ${nome.lastIndexOf('o')} <br>`
window.document.body.innerHTML += `As três últimas letras do seu nome são ${nome.slice(-3)} <br>`
window.document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')} <br>`
window.document.body.innerHTML += `Seu nome em maiúscula é ${nome.toUpperCase()} <br>`
window.document.body.innerHTML += `Seu nome em minúsculas é ${nome.toLowerCase()} <br>`
