const counterEl = {
    sub: document.querySelector('[data-action="decrement"]'),
    add: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
}

counterEl.sub.addEventListener('click', decrement);
counterEl.add.addEventListener('click', increment);