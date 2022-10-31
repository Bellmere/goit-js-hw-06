const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');
console.log(spanEl);
console.log(inputEl);


inputEl.addEventListener('input', element => {
    spanEl.style.fontSize = `${Number(element.currentTarget.value)}px`;
});