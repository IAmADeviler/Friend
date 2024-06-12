var myInput = document.getElementById("password");
var con = document.querySelector('.container');
var btn = document.querySelector('#form');
var btn2 = document.querySelector('#form2');
var btn3 = document.querySelector('#form3');
var btn4 = document.querySelector('#form4');
var btn5 = document.querySelector('#form5');
var btn6 = document.querySelector('#form6');
var btn7 = document.querySelector('#form7');
var mainSection = document.querySelector('.mainSection')
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = form.username.value.toString().toLowerCase();
    const password = form.password.value

    const authenticated = authentication(username, password);

    if (authenticated === 'chudail') {
        window.location.href = 'Friends_pages/chudail.html';
    }
    else if (authenticated === 'penguin') {
        window.location.href = 'Friends_pages/penguin.html';
    }
    else if (authenticated === 'kritika') {
        window.location.href = 'Friends_pages/kritika.html';
    }
    else if (authenticated === 'ayush') {
        window.location.href = 'Friends_pages/ayush.html';
    }
    else if (authenticated === 'shlok') {
        window.location.href = 'Friends_pages/shlok.html';
    }
    else if (authenticated === 'sakshi') {
        window.location.href = 'Friends_pages/sakshi.html';
    }
    else if (authenticated === 'bala') {
        window.location.href = 'Friends_pages/bala.html';
    }
    else {
        alert('wrong password')
    }
})

btn.addEventListener('click', () => {
    con.classList.remove('hidden');
    mainSection.classList.add('hidden')
});
btn2.addEventListener('click', () => {
    con.classList.remove('hidden');
    mainSection.classList.add('hidden')
});
btn3.addEventListener('click', () => {
    con.classList.remove('hidden');
    mainSection.classList.add('hidden')
});
btn4.addEventListener('click', () => {
    con.classList.remove('hidden');
    mainSection.classList.add('hidden')
});
btn5.addEventListener('click', () => {
    con.classList.remove('hidden');
    mainSection.classList.add('hidden')
});
btn6.addEventListener('click', () => {
    con.classList.remove('hidden');
    mainSection.classList.add('hidden')
});
btn7.addEventListener('click', () => {
    con.classList.remove('hidden');
    mainSection.classList.add('hidden')
});

var chudail_password = 'chudail_26';
var penguin_password = 'penguin_08';
var kritika_password = 'kritika_14';
var ayush_password = 'ayush_25';
var shlok_password = 'shlok_19';
var sakhsi_password = 'sakshi_24';
var bala_password = 'bala_09';

function authentication(username, password) {
    if (username === 'chudail' && password === chudail_password) {
        return 'chudail'; 
    }
    if (username === 'penguin' && password === penguin_password) {
        return 'penguin'; 
    }
    if (username === 'kritika' && password === kritika_password) {
        return 'kritika'; 
    }
    if (username === 'ayush' && password === ayush_password) {
        return 'ayush'; 
    }
    if (username === 'shlok' && password === shlok_password) {
        return 'shlok'; 
    }
    if (username === 'sakshi' && password === sakhsi_password) {
        return 'sakshi'; 
    }
    if (username === 'bala' && password === bala_password) {
        return 'bala'; 
    }
    else {
        return false
    }
}
