const colors = [
  '#FF6347', // Tomato
  '#4682B4', // Steel Blue
  '#008000', // Green
  '#FFD700', // Gold
  '#8A2BE2', // Blue Violet
  '#FFA500', // Orange
  '#FF69B4', // Hot Pink
  '#00CED1', // Dark Turquoise
  '#800080', // Purple
  '#FFFF00', // Yellow
  '#FF0000', //Red
];
const colorNames = [
  'Tomato',
  'Steel Blue',
  'Green',
  'Gold',
  'Blue Violet',
  'Orange',
  'Hot Pink',
  'Dark Turquoise',
  'Purple',
  'Yellow',
  'Red',
];

const colorBox = document.querySelector('.flipper-cont');
const button = document.querySelector('.btn');
const colorName = document.querySelector('.color-name');
const hexValue = document.querySelector('.hex-value');
const color = document.querySelector('.color');

function changeColor() {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomColorIndex];
  const randomColorName = colorNames[randomColorIndex];
  colorBox.style.backgroundColor = randomColor;
  color.textContent = randomColorName;
  console.log(randomColor, randomColorName);

  colorName.addEventListener('click', function () {
    color.textContent = randomColorName;
  });
  hexValue.addEventListener('click', function () {
    color.textContent = randomColor;
  });
}

button.addEventListener('click', function () {
  changeColor();
});
