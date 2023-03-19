const input = document.querySelector('#font-size-control');

const text = document.getElementById('text');
// text.style.fontSize = '50px';
// console.log(text)

input.addEventListener('input', (event) => text.style.fontSize = `${input.value}px`);

