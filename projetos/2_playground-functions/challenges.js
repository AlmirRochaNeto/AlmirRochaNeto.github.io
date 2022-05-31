// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}
// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = array[0];
  let higherNumberCount = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === higherNumber) {
      higherNumberCount += 1;
    }
  }
  return higherNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let d1 = cat1 - mouse;
  let d2 = cat2 - mouse;
  if (d1 < 0) {
    d1 *= (-1);
  }
  if (d2 < 0) {
    d2 *= (-1);
  }
  if (d1 === d2) {
    return 'os gatos trombam e o rato foge';
  } if (d1 < d2) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else result.push('bug!');
  }
  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let encodeString = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      encodeString[index] = '1';
    } else if (string[index] === 'e') {
      encodeString[index] = '2';
    } else if (string[index] === 'i') {
      encodeString[index] = '3';
    } else if (string[index] === 'o') {
      encodeString[index] = '4';
    } else if (string[index] === 'u') {
      encodeString[index] = '5';
    }
  }
  return encodeString.join('');
}

function decode(string) {
  // seu código aqui
  let decodeString = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      decodeString[index] = 'a';
    } else if (string[index] === '2') {
      decodeString[index] = 'e';
    } else if (string[index] === '3') {
      decodeString[index] = 'i';
    } else if (string[index] === '4') {
      decodeString[index] = 'o';
    } else if (string[index] === '5') {
      decodeString[index] = 'u';
    }
  }
  return decodeString.join('');
}

// Desafio 10
function techList(array, string) {
  // seu código aqui
  let result = [];
  let arrayOrder = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayOrder.length; index += 1) {
    if (array[index]) {
      result.push({
        tech: array[index],
        name: string,
      });
    }
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
