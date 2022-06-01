const text = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');
const textMeme = document.getElementById('meme-text');
const image = document.getElementById('meme-insert');
const imageMeme = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const buttonMeme1 = document.getElementById('meme-1');
const buttonMeme2 = document.getElementById('meme-2');
const buttonMeme3 = document.getElementById('meme-3');
const buttonMeme4 = document.getElementById('meme-4');

function createTextMeme(event) {
  event.preventDefault();
  textMeme.innerHTML = text.value;
}
function createImageMeme() {
  console.log(image.files[0].name);
  imageMeme.setAttribute('src', image.files[0].name);
}
function fire() {
  memeImageContainer.style.border = 'dashed 3px rgb(255,0,0)';
}
function water() {
  memeImageContainer.style.border = 'double 5px rgb(0,0,255)';
}
function earth() {
  memeImageContainer.style.border = 'groove 6px rgb(0,128,0)';
}
function meme1() {
  imageMeme.setAttribute('src', 'imgs/meme1.png');
}
function meme2() {
  imageMeme.setAttribute('src', 'imgs/meme2.png');
}
function meme3() {
  imageMeme.setAttribute('src', 'imgs/meme3.png');
}
function meme4() {
  imageMeme.setAttribute('src', 'imgs/meme4.png');
}
buttonMeme1.addEventListener('click', meme1);
buttonMeme2.addEventListener('click', meme2);
buttonMeme3.addEventListener('click', meme3);
buttonMeme4.addEventListener('click', meme4);
buttonFire.addEventListener('click', fire);
buttonWater.addEventListener('click', water);
buttonEarth.addEventListener('click', earth);
image.addEventListener('change', createImageMeme);
text.addEventListener('keyup', createTextMeme);
