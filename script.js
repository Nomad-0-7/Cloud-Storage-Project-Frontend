const toggleBtn = document.getElementById('theme-toggle');
  
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});