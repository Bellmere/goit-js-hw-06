const categoriesEl = document.querySelector('#categories');
const cageroiesItemEl = categoriesEl.querySelectorAll('.item');
console.log(`Number of categories: ${cageroiesItemEl.length}`);


cageroiesItemEl.forEach(item => {
    const title = item.querySelector("h2");
    const listEl = item.querySelector('ul');
    const listItemEl = listEl.querySelectorAll('li');
    console.log(`Category: ${title.textContent}\n Elements: ${listItemEl.length}`);
});