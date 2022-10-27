const actions = {
    conterValue: document.querySelector('#value') = 0,
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
};
console.log(actions);

actions.buttonDecrement.addEventListener('click', () => {
    return actions.conterValue -= 1;
});

actions.buttonIncrement.addEventListener('click', () => {
    return actions.conterValue += 1;
});