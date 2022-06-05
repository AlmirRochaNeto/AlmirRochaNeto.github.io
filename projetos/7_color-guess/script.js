const firstball = document.getElementsByClassName('ball')[0];
const secondball = document.getElementsByClassName('ball')[1];
const thirdball = document.getElementsByClassName('ball')[2];
const fourthball = document.getElementsByClassName('ball')[3];
const fifthball = document.getElementsByClassName('ball')[4];
const sixthball = document.getElementsByClassName('ball')[5];
const rgbColor = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.getElementById('score');
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}
function colors() {
  firstball.innerHTML = randomColor();
  secondball.innerHTML = randomColor();
  thirdball.innerHTML = randomColor();
  fourthball.innerHTML = randomColor();
  fifthball.innerHTML = randomColor();
  sixthball.innerHTML = randomColor();
  firstball.style.backgroundColor = firstball.textContent;
  secondball.style.backgroundColor = secondball.textContent;
  thirdball.style.backgroundColor = thirdball.textContent;
  fourthball.style.backgroundColor = fourthball.textContent;
  fifthball.style.backgroundColor = fifthball.textContent;
  sixthball.style.backgroundColor = sixthball.textContent;
}
function select() {
  const ballSelector = document.getElementsByClassName('ball');
  const colorSelected = Math.floor(Math.random() * ballSelector.length);
  const selected = (ballSelector[colorSelected]);
  rgbColor.innerHTML = selected.textContent;
}
colors();
select();
score.innerHTML = 'Pontos: 0';
let points = 0;
function answer(event) {
  if (event.target.innerHTML === rgbColor.innerHTML) {
    answerText.innerHTML = 'Acertou!';
    points += 3;
  } else answerText.innerHTML = 'Errou! Tente novamente!';
  score.innerHTML = `Pontos: ${points}`;
}
function reset() {
  colors();
  select();
  answerText.innerHTML = 'Escolha uma cor';
}
firstball.addEventListener('click', answer);
secondball.addEventListener('click', answer);
thirdball.addEventListener('click', answer);
fourthball.addEventListener('click', answer);
fifthball.addEventListener('click', answer);
sixthball.addEventListener('click', answer);
resetButton.addEventListener('click', reset);
