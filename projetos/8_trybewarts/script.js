const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrar = document.getElementById('entrar');
const area = document.getElementById('textarea');
const counter = document.getElementById('counter');
function tryberLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

entrar.addEventListener('click', tryberLogin);

const submitButton = document.getElementById('submit-btn');
const agreementCheckbox = document.getElementById('agreement');

function check() {
  if (agreementCheckbox.checked === true) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = 'rgb(77, 39, 138)';
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'grey';
  }
}

function caracterCounter() {
  const carateres = this.value.length;
  console.log(carateres);
  const limit = 500;
  const remaining = limit - carateres;
  counter.innerHTML = remaining;
}

agreementCheckbox.addEventListener('click', check);
area.addEventListener('keyup', caracterCounter);

const querySelectorAll = (element) => {
  const nodeList = document.querySelectorAll(element);
  const result = [...nodeList].map((arr) => arr.value);
  return result;
};

const inputForm = document.getElementById('evaluation-form');
const outputForm = document.getElementById('form-data');

function resultClickSubmitButton() {
  const content = {
    name: document.getElementById('input-name').value,
    lastName: document.getElementById('input-lastname').value,
    email: document.getElementById('input-email').value,
    house: document.getElementById('house').value,
    textarea: document.getElementById('textarea').value,
    family: document.querySelector('input[name=\'family\']:checked').value,
    rate: document.querySelector('input[name=\'rate\']:checked').value,
    materia: querySelectorAll('input[class=\'subject\']:checked').join(', '),
  };
  outputForm.innerText = `Nome: ${content.name} ${content.lastName}
Email: ${content.email}
Casa: ${content.house}
Família: ${content.family}
Matérias: ${content.materia}
Avaliação: ${content.rate}
Observações: ${content.textarea}`;
  inputForm.style.visibility = 'hidden'; outputForm.style.display = 'flex';
}

submitButton.addEventListener('click', resultClickSubmitButton);
