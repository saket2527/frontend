const API_URL = 'https://backend-0k1d.onrender.com/api';

// Register new user with the backend
async function register() {
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
    
    if (response.ok) {
      document.getElementById("register-username").value = '';
      document.getElementById("register-password").value = '';
    }
  } catch (error) {
    alert('Failed to connect to the server.');
    console.error('Error:', error);
  }
}

// Login existing user with the backend
async function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
    
    if (response.ok) {
      localStorage.setItem("loggedInUser", data.username);
      window.location.href = "dashboard.html";
    }
  } catch (error) {
    alert('Failed to connect to the server.');
    console.error('Error:', error);
  }
}