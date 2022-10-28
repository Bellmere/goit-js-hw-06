const inputEl = document.querySelector('input');
const validationInputEl = document.querySelector('#validation-input');
const lengthEl = Number(inputEl.dataset.length);


inputEl.addEventListener('blur', (event) => {
    if (event.target.value.length === lengthEl) {
        validationInputEl.classList.add('valid');
        console.log('subbitch');
        validationInputEl.classList.remove('invalid');
    }
    else {
        validationInputEl.classList.add('invalid');
    }
});