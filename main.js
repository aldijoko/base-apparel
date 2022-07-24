const form = document.querySelector('form');

const emailInput = document.querySelector('.email');

const errorMessage = document.querySelector('.txt-error')
const errorIcon = document.querySelector('.icon-error')

const setError = () => {
    emailInput.classList.add('border-error');
    errorMessage.classList.remove('hidden');
    errorIcon.classList.remove('hidden');
 }

 const setSuccess = () => {
    emailInput.classList.remove('border-error');
    errorMessage.classList.add('hidden');
    errorIcon.classList.add('hidden');
 }

 const validateEmail = (e) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
 }

 const onClick = () => {
    const emailValue = emailInput.value.trim();
    if (emailValue === '' || !validateEmail(emailValue)) {
        setError();
     } else if (validateEmail(emailValue)) {
        setSuccess();
     }
 }


form.addEventListener('submit', (event) => {
    event.preventDefault();
    onClick();
 });