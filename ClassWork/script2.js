document.addEventListener('DOMContentLoaded', () => {
   const uname = document.getElementById('uname');
   const pass = document.getElementById('pass');
   const btn = document.getElementById('login');
   
   btn.addEventListener('click', () => {
     console.log("Button is clicked");
     const username = uname.value;
     const password = pass.value;
     let user = JSON.parse(localStorage.getItem('users'));

     console.log("Entered Username: " + username);
     console.log("Entered Password: " + password);
     console.log("Stored Username: " + user.uname);
     console.log("Stored Password: " + user.pass);
     
      const matchedUser = user.find(user => user.name === username && user.password === password);
  
      if (matchedUser) {
        alert('Successfully logged in');
        window.location.href = 'addToCart.html';
      } else {
        alert('Invalid credentials');
      }
   });
 });
 