const form = document.querySelector('.login-form');

const emailInput = form.querySelector('input[name="email"]');
const passwordInput = form.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Fields must be filled!')
    } else {
       let userData = {
        email: emailInput.value,
        password: passwordInput.value,
       };
        console.log(userData);
        form.reset()
    }
})