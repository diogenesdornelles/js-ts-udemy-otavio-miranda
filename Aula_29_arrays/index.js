// JS admite declaração de dados diferentes: str, int, float, null, bool etc.
// Array são indexados por elementos.

const alunos = ['Maria', 'Luiz', 'João']; 

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);

alunos[1] = 'Joana'; // Mesmo sendo const admite new assingment
alunos[3] = 'Luíza';


console.log(alunos);

console.log(alunos.length); // Tamanho

alunos[alunos.length] = 'David'; // Sempre adiciona ao final.
alunos[alunos.length] = 'Ricardo';

alunos.push('Otávio'); // insere elemento ao final.

alunos.unshift('Elis'); // Insere elemento no início.

console.log(alunos);

console.log(alunos.slice(1, 3)); // retorna elementos dos indexes. Exclui fim (3). Aceita número negativo.

console.log(alunos.slice(0, -2));

console.log(alunos.sort()); // ordena o array.

console.log(alunos.join(', ')); // une o array.

const removido1 = alunos.pop(); // remove do final.

console.log(removido1);

const removido2 = alunos.shift(); // remove do início.

console.log(removido2);

delete alunos[3]; // apaga elemento, sem mexer nos indexes.

console.log(alunos); // <1 empty item>. Fica undefined.

alunos.push('Eloísa'); // 
alunos.push('Guilherme'); // 

console.log(typeof alunos); // object

console.log(alunos instanceof Array); // retorna o tipo do objeto
