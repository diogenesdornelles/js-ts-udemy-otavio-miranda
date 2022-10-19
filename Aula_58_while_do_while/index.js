console.log('####### WHILE ###########');

let i = 0;
while (i <= 10) {
console.log(i);
i++;
}

console.log('######### WHILE_01 #############');

function randInt(min, max) {
  const r = Math.floor(Math.random() * (max - min) + min);
  return r;
}

let rand;
let check = true;
while (check) {
  rand = randInt(0, 10);
  console.log(rand);
  if (rand === 3) {
    check = false;
    console.log('Stop');
  } else {
    console.log('Continua');
  }
}

console.log('######### WHILE_02 #############');

rand = randInt(0, 10);
while (rand !== 3) {
  console.log('Continua');
  rand = randInt(0, 10);
  console.log(rand);
  } 
  console.log('Stop');

console.log('######### DO WHILE_01 #############');

do {
  rand = randInt(0, 10);
  console.log('Continua');
  console.log(rand);
} while (rand !== 3);
console.log('Stop');
