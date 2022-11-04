/**
Estados de uma promise:
* Pending - Pendente
* Fullfilled - Resolvida
* Rejected - Rejeitada
 */


function randomInt(min, max){
  min *= 1000;
  max *= 1000;
  const time = Math.floor(Math.random() * (max - min) + min);
  return time;
}

function wait(msg, time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') reject(new TypeError('First parameter must be a string'));
      else resolve(`Message: ${msg} | Time: ${time}ms`);
    }, time);
  })
}

// wait('Connecting DB...', randomInt(1, 3))
//   .then((msg) => {
//     console.log(msg);
//     return wait('Downloading data...', randomInt(1, 4))
//   })
//   .then((msg) => {
//     console.log(msg);
//     return wait('Installing dependences...', randomInt(1, 3))
//   })
//   .then((msg) => {
//     console.log(msg);
//     return wait('Almost there. Please wait...', randomInt(1, 2))
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log('Done!');
//     }, 2000);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

async function execute() {

  try {

    const first = await wait('Connecting DB...', randomInt(1, 2));
    console.log(first);
    const second = await wait('Downloading data...', randomInt(1, 3));
    console.log(second);
    const third = await wait('Installing dependences...', randomInt(1, 3));
    console.log(third);
    const fourth = await wait('Almost there. Please wait...', randomInt(1, 2));
    console.log(fourth);
    const fifth = () => {
           setTimeout(() => {
             console.log('Done!');
           }, 1500);
    }
    fifth();

  } catch (e) {
    console.log(e)
  }
}

execute()

