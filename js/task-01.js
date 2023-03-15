const allCategories = document.querySelector('#categories');
const categoriesItems = allCategories.querySelectorAll('.item');

const numberOfCategories = categoriesItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesItems.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
});