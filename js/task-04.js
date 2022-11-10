const counterEl = {
    sub: document.querySelector('[data-action="decrement"]'),
    add: document.querySelector('[data-action="increment"]'),
};

const valueEl = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

counterEl.sub.addEventListener('click', decrement);
counterEl.add.addEventListener('click', increment);