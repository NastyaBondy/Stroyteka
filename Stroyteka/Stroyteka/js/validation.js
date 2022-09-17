angular.module('myapp', []);
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const email = document.getElementById('email');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        checkInputs();
    }

    function checkInputs() {
        // trim to remove the whitespaces
        const emailValue = email.value.trim();

        if (emailValue === '') {
            setErrorFor(email, 'Поле не может быть пустым!');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Неверный адрес электронной почты!');
        } else {
            setSuccessFor(email);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'mailing error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'mailing form-group success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});
