const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
// console.log(list);

ingredients.forEach((ingredient) => {
  const listItem = document.createElement('li');
  // console.log(listItem);
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  list.append(listItem);
});


