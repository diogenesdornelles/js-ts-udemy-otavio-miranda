// Exercício 01: Elabore uma função que receba 02 valores numéricos e retorne o maior deles.

// FUNÇÕES NOMINADAS

function maxValue(value_01, value_02) {
  if (value_01 < value_02) {
    return value_02;
  } else if (value_01 > value_02) {
    return value_01;
  } else {
    return value_01;
  }
};

function maxValue1(value_01, value_02) {
  if (value_01 > value_02) {
    return value_01;
  } else {
    return value_02;
  }
};

function maxValue2(value_01, value_02) {
  return value_01 > value_02 ? value_01 : value_02;
}

// FUNÇÕES ANÔNIMAS

const maxValue3 = function (value_01, value_02) {
  return value_01 > value_02 ? value_01 : value_02;
};

const maxValue4 = (value_01, value_02) => {
  return value_01 > value_02 ? value_01 : value_02;
};

const maxValue5 = (value_01, value_02) => value_01 > value_02 ? value_01 : value_02;

console.log(maxValue(4,5));
console.log(maxValue1(4,5));
console.log(maxValue2(4,5));
console.log(maxValue3(4,5));
console.log(maxValue4(4,5));
console.log(maxValue5(4,5));



