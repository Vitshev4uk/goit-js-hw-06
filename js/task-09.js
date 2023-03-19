function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnChangeCol = document.querySelector('.change-color');
const textCol = document.querySelector('.color');

btnChangeCol.addEventListener('click', (event) => {
  body.style.backgroundColor = getRandomHexColor();
  textCol.textContent = getRandomHexColor()
});