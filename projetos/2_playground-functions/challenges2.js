// Desafio 11

function verifyIfNumberRepeats(number, array) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (number === array[index]) count += 1;
  }
  return count;
}
function teste(array) {
  for (let number of array) {
    let isValid = number < 0 || number > 9 || verifyIfNumberRepeats(number, array) > 2;
    if (isValid) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (teste(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let string = array
    .join('')
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return string;
}

// Desafio 12

function funLineA(lineA, lineB, lineC) {
  let difA = lineB / lineC;
  if (lineA < (lineB + lineC) && lineA > Math.abs(difA)) {
    return true;
  } return false;
}
function funLineB(lineA, lineB, lineC) {
  let difB = lineA / lineC;
  if (lineB < (lineA + lineC) && lineB > Math.abs(difB)) {
    return true;
  } return false;
}
function funLineC(lineA, lineB, lineC) {
  let difC = lineA / lineB;
  if (lineC < (lineA + lineB) && lineC > Math.abs(difC)) {
    return true;
  } return false;
}
function triangleCheck(lineA, lineB, lineC) {
  if (funLineA(lineA, lineB, lineC) === true
  && funLineB(lineA, lineB, lineC) === true
  && funLineC(lineA, lineB, lineC) === true) {
    return true;
  } return false;
}

// Desafio 13

function hydrate(string) {
  let glassOfWater = string.match(/\d+/g);
  glassOfWater = glassOfWater.map(Number);
  let result = 0;
  for (let index = 0; index < glassOfWater.length; index += 1) {
    result += glassOfWater[index];
  }
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
