const btnIncrease = document.querySelector('.btn-increase');
const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const counter = document.querySelector('.counter');

let count = 0;

function increaseCounter() {
  count = count + 1;
}

function decreaseCounter() {
  count = count - 1;
}

function resetCounter() {
  count = 0;
}

btnIncrease.addEventListener('click', function () {
  increaseCounter();
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = 'aqua';
  }
});
btnDecrease.addEventListener('click', function () {
  decreaseCounter();
  counter.textContent = count;
  if (count < 0) {
    counter.style.color = 'red';
  }
});
btnReset.addEventListener('click', function () {
  resetCounter();
  counter.textContent = count;
  if ((count = 0)) {
    counter.style.color = 'aqua';
  }
});
