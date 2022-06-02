const button = document.getElementById('criar-carta');
const text = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');
const counter = document.getElementById('carta-contador');
function createdArray() {
  const phrase = text.value;
  const array = phrase.split(' ');
  return array;
}
function getStyle() {
  const styles = ['newspaper', 'magazine1', 'magazine2'];
  let style = '';
  for (let index = 0; index < 1; index += 1) {
    style += styles[Math.floor(Math.random() * 3)];
  }
  return style;
}
function getSize() {
  const sizes = ['medium', 'big', 'reallybig'];
  let size = '';
  for (let index = 0; index < 1; index += 1) {
    size += sizes[Math.floor(Math.random() * 3)];
  }
  return size;
}
function getRotation() {
  const rotations = ['rotateleft', 'rotateright'];
  let rotation = '';
  for (let index = 0; index < 1; index += 1) {
    rotation += rotations[Math.floor(Math.random() * 2)];
  }
  return rotation;
}
function getInclination() {
  const inclinations = ['skewleft', 'skewright'];
  let inclination = '';
  for (let index = 0; index < 1; index += 1) {
    inclination += inclinations[Math.floor(Math.random() * 2)];
  }
  return inclination;
}
function generateLetter(event) {
  event.preventDefault();
  const array = createdArray();
  letter.innerHTML = '';
  for (let index = 0; index < array.length; index += 1) {
    const newSpan = document.createElement('span');
    const word = array[index];
    const style = getStyle();
    const size = getSize();
    const rotation = getRotation();
    const inclination = getInclination();
    newSpan.textContent = word;
    newSpan.classList.add(style, size, rotation, inclination);
    letter.appendChild(newSpan);
    if (word === '') {
      letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
    counter.innerHTML = array.length;
  }
}
function changeClasses(event) {
  const style = getStyle();
  const size = getSize();
  const rotation = getRotation();
  const inclination = getInclination();
  event.target.classList.remove('newspaper', 'magazine1', 'magazine2',
    'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft',
    'skewright');
  event.target.classList.add(style, size, rotation, inclination);
}
button.addEventListener('click', generateLetter);
letter.addEventListener('click', changeClasses);
