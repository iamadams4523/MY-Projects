const showBox = document.querySelector('.show-box');
const buttons = document.querySelectorAll('.item');
const buttons2 = document.querySelectorAll('.items');
const sqrt = document.querySelector('.sqrt');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    console.log(button.textContent);
    showBox.innerHTML += button.textContent;
  });
});

function solve() {
  let x = showBox.innerHTML;
  let y = eval(x);
  showBox.innerHTML = y;

  return y;
}

function squareRoot() {
  let number = parseFloat(showBox.innerHTML);
  if (number >= 0) {
    console.log(Math.sqrt(number));
    showBox.innerHTML = Math.sqrt(number);
    return Math.sqrt(number);
  } else {
    alert('Invalid input: Cannot calculate square root of a negative number');
  }
}
equals.addEventListener('click', function () {
  solve();
});
sqrt.addEventListener('click', function () {
  squareRoot();
});
clear.addEventListener('click', function () {
  showBox.innerHTML = '';
});
