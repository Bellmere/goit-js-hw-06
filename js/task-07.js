const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('span#text');
console.log(spanEl);


inputEl.addEventListener('input', e => {
    spanEl.style.fontSize = `${e.target.value} px`;
});