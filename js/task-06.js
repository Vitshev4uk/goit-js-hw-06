const input = document.querySelector('#validation-input');
console.log(input);

input.addEventListener('blur', () => {
    const inputValue = input.value;
    const inputLength = input.getAttribute('data-length');

    if (inputValue.length > inputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});