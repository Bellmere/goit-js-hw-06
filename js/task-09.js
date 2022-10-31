function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('button.change-color');
const spanEl = document.querySelector('span.color');
const body = document.querySelector('body');

btnEl.addEventListener('click', onClick);

function onClick(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanEl.textContent = color;
}
