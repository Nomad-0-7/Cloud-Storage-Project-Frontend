const toggleBtn = document.getElementById('theme-toggle');
  
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

const apiurl="https://localhost:7092";

const register="/api/User_Authentication/Register";

const registerurl=apiurl+register;

fetch(registerurl)