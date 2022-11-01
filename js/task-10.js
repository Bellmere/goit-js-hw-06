function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEL = document.querySelector('div#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');


const createBoxes = amount => {
    const boxes = [];
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.height = `${30 + 10 * i}px`;
      box.style.width = `${30 + 10 * i}px`;
      box.style.background = getRandomHexColor();
      boxes.push(box);
    }
    return boxes;
}

const destroyBoxes = () => {
  boxesEL.innerHTML = '';
}

btnCreate.addEventListener('click', () => {
  let boxesAdd = createBoxes(Number(inputEl.value));
  boxesEL.append(...boxesAdd);
});


btnDestroy.addEventListener('click', destroyBoxes);