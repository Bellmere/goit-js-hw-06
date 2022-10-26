const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach((item, index) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = `${item}`;
  ingredientsEl.append(itemEl);
});

console.log(ingredientsEl);