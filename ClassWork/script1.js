const uname = document.getElementById('uname');
const pass = document.getElementById('pass');
const email = document.getElementById('email');

const sBtn = document.getElementById('signup');

sBtn.addEventListener('click', () => {
    const name = uname.value;
    const password = pass.value;
    const mail = email.value;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push({ name, password, mail });
    localStorage.setItem('users', JSON.stringify(users));
    alert('signup successfull');
    window.location.href = 'login.html';
    location.reload();
});
