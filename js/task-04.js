let counterValue = 0;

const counter = document.querySelector('#counter');
// console.log(counter);

const btnDecrement = document.querySelector('[data-action="decrement"]');
// console.log(btnDecrement);

const btnIncrement = document.querySelector('[data-action="increment"]');
// console.log(btnIncrement);

const value = document.querySelector('#value');
// console.log(value);


btnDecrement.addEventListener('click', valueDecrement);
btnIncrement.addEventListener('click', valueIncrement);



function valueDecrement() {
    console.log('click -1');
    counterValue -= 1;
    value.textContent = counterValue
};
function valueIncrement() {
    console.log('click +1');
    counterValue += 1;
    value.textContent = counterValue;
};

