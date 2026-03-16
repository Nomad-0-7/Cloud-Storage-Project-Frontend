const toggleBtn = document.getElementById('theme-toggle');
const loginForm = document.querySelector('form');

// 1. Theme Toggle
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Save preference to local storage
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// 2. Form Submission (The Register/Login Logic)
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    const apiurl = "https://localhost:7092";
    const registerEndpoint = "/api/User_Authentication/Register";

    try {
        const response = await fetch(apiurl + registerEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        // 👇 Log the actual response
        console.log("Status:", response.status);
        console.log("Status Text:", response.statusText);
        
        // Try to get response body
        const responseText = await response.text();
        console.log("Response:", responseText);
        
        if (response.ok) {
            const data = JSON.parse(responseText);
            alert("Success! Welcome to the cloud.");
        } else {
            // 👇 Show actual error from server
            alert(`Failed: ${response.status}\n${responseText}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Network error: " + error.message);
    }
});