const inputEl = document.querySelector('input');

const lengthEl = Number(inputEl.dataset.length);

console.log(lengthEl);
console.log(inputEl.value);


inputEl.addEventListener('blur', (event) => {
    if (inputEl.value.length === lengthEl) {
        console.log('subbitch');
    }
});