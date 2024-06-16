const form_submit = document.querySelector('form');

form_submit.addEventListener('submit', (e) => {
    e.preventDefault();
    var username = form_submit.username.value.toString().toLowerCase();
    var password = form_submit.password.value

    const authenticated = authentication(username, password);

    if (authenticated === true) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwgI6vvFcBM9W0U6NdAWjVptRDWheX1Vgy5FLNjk-ta3QaSBgE2dsA0Wq_PW1hzhI8Onw/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', (e) => {
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        })
    }
    else {
        alert('wrong password')
    }
})

var chudail_password = 'chudail_26';
var penguin_password = 'penguin_08';
var kritika_password = 'kritika_14';
var ayush_password = 'ayush_25';
var shlok_password = 'shlok_19';
var sakhsi_password = 'sakshi_24';
var bala_password = 'bala_09';

function authentication(username, password) {
    if (username === 'chudail' && password === chudail_password) {
        return true;
    }
    if (username === 'penguin' && password === penguin_password) {
        return true;
    }
    if (username === 'kritika' && password === kritika_password) {
        return true;
    }
    if (username === 'ayush' && password === ayush_password) {
        return true;
    }
    if (username === 'shlok' && password === shlok_password) {
        return true;
    }
    if (username === 'sakshi' && password === sakhsi_password) {
        return true;
    }
    if (username === 'bala' && password === bala_password) {
        return true;
    }
    else {
        return false
    }
}