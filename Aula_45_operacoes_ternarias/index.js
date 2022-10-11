// Operador ternário: '?' ':'

const pontuacaoUser = 999;

const nivelUser = pontuacaoUser >= 1000 ? 'usuário VIP' : 'usuário normal'; //

const corUser = null;
const temaUser = null;

const corPadrao = corUser || false || NaN; // retorna o primeiro valor não false ou o último false.

const temaPadrao = temaUser && 'drácula' && 'dark' && 'light'; // retorna o primeiro valor false ou o último true.

console.log(nivelUser, corPadrao, temaPadrao);

// CÓDIGO SEM OPERADOR
//if (pontuacaoUser >= 1000) {
//  console.log('Pontuacao de usuário VIP!');
//} else {
//  console.log('Pontuacao de usuário normal');
//}


