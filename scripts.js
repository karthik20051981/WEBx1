function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate saving credentials to userdataStu (this would normally require server-side code)
    const userData = { username, password };
    console.log('User data saved:', userData);

    // Redirect to index2.html after successful login
    window.location.href = 'index2.html';
}

document.getElementById('loginForm').addEventListener('submit', validateForm);