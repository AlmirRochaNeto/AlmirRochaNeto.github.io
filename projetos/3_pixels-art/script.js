document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[0].classList.add('selected');

function colorSelect() {
  const colorPalette = document.getElementById('color-palette');
  const color = document.querySelectorAll('.color');
  colorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
colorSelect();

function coloredPixel() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    event.target.style.backgroundColor = document.querySelector('.color.selected')
      .style.backgroundColor;
  });
}
coloredPixel();

function clearPixels() {
  const pixelsToDelete = document.querySelectorAll('.pixel');
  if (pixelsToDelete.length > 0) {
    for (let index = pixelsToDelete.length - 1; index >= 0; index -= 1) {
      pixelsToDelete[index].remove();
    }
  }
}

function generateBoard() {
  clearPixels();
  const pixelBoardToAdd = document.querySelector('#pixel-board');
  let number = document.getElementById('board-size').value;
  if (number < 1) {
    alert('Board inválido!');
  }
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  for (let index = 1; index <= number * number; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    pixelBoardToAdd.appendChild(newDiv);
  }
  pixelBoardToAdd.style.width = `${40 * number}px`;
  pixelBoardToAdd.style.height = `${40 * number}px`;
}

const vqvButton = document.getElementById('generate-board');
vqvButton.addEventListener('click', generateBoard);

function buttonFunction() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', buttonFunction);

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColors() {
  const secondColor = document.getElementsByClassName('color')[1];
  const thirdColor = document.getElementsByClassName('color')[2];
  const fourthColor = document.getElementsByClassName('color')[3];

  secondColor.style.backgroundColor = randomColor();
  thirdColor.style.backgroundColor = randomColor();
  fourthColor.style.backgroundColor = randomColor();
}
changeColors();
