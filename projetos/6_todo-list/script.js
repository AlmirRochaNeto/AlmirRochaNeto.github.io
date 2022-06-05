const button = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const tasks = document.getElementById('lista-tarefas');
const eraseButton = document.getElementById('apaga-tudo');
const eraseCompleteButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const removeSelected = document.getElementById('remover-selecionado');

function addTask(event) {
  event.preventDefault();
  const task = text.value;
  const newTask = document.createElement('li');
  newTask.textContent = task;
  tasks.appendChild(newTask);
  newTask.classList.add('task');
  text.value = '';
}
function addColor(event) {
  const singleTask = document.querySelectorAll('.task');
  for (let index = 0; index < singleTask.length; index += 1) {
    singleTask[index].classList.remove('task-selected');
    event.target.classList.add('task-selected');
  }
}
function addComplete(event) {
  event.target.classList.toggle('completed');
}
function eraseAll() {
  const singleTask = document.querySelectorAll('.task');
  if (singleTask.lenght > 0);
  for (let index = singleTask.length - 1; index >= 0; index -= 1) {
    singleTask[index].remove();
  }
}
function eraseComplete() {
  const completeTask = document.querySelectorAll('.completed');
  if (completeTask.lenght > 0);
  for (let index = completeTask.length - 1; index >= 0; index -= 1) {
    completeTask[index].remove();
  }
}
function save() {
  const tasksSaved = document.getElementsByClassName('task');
  if (tasksSaved.length === 0) {
    localStorage.clear();
  }
  for (let index = 0; index < tasksSaved.length; index += 1) {
    const info = {
      text: tasksSaved[index].innerHTML,
      class: tasksSaved[index].className,
    };
    localStorage.setItem(index, JSON.stringify(info));
  }
}
function load() {
  for (let index = 0; index < localStorage.length; index += 1) {
    const taskInfo = JSON.parse(localStorage.getItem(index));
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.innerHTML = taskInfo.text;
    newTask.className = taskInfo.class;
    tasks.appendChild(newTask);
  }
}
load();
function up() {
  const selectedTask = document.querySelector('.task-selected');
  if (selectedTask === null) {
    return selectedTask;
  }
  const selectedTask2 = selectedTask.previousSibling;
  if (selectedTask2) {
    tasks.insertBefore(selectedTask, selectedTask2);
  }
}
function down() {
  const selectedTask = document.querySelector('.task-selected');
  if (selectedTask === null) {
    return selectedTask;
  }
  const selectedTask2 = selectedTask.nextElementSibling;
  if (selectedTask2) {
    tasks.insertBefore(selectedTask2, selectedTask);
  }
}
function remove() {
  const selected = document.querySelector('.task-selected');
  selected.parentNode.removeChild(selected);
}
tasks.addEventListener('click', addColor);
tasks.addEventListener('dblclick', addComplete);
button.addEventListener('click', addTask);
eraseButton.addEventListener('click', eraseAll);
eraseCompleteButton.addEventListener('click', eraseComplete);
saveButton.addEventListener('click', save);
moveUp.addEventListener('click', up);
moveDown.addEventListener('click', down);
removeSelected.addEventListener('click', remove);
