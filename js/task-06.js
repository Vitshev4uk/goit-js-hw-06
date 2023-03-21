const input = document.querySelector('#validation-input');
// console.log(input);

input.addEventListener('blur', () => {
    const inputValue = input.value;
    const inputLength = parseInt(input.getAttribute('data-length'));
    console.log(inputLength);

    if (inputValue.length === inputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});