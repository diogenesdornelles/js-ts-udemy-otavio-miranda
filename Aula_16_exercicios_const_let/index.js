const nome = 'Diógenes';
const sobrenome = 'Dornelles';
const idade = 37;
const peso = 70;
const alturaEmMetros = 1.71;
let imc;
imc = peso / (alturaEmMetros ^ 2);
let anoNascimento;
anoNascimento = 2022 - idade;

// Template strings

console.log(`${nome} ${sobrenome} tem idade de ${idade}, pesa ${peso} Kg, tem ${alturaEmMetros} m de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}.`);
