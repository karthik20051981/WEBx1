<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <form id="contactForm">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
        <p id="responseMsg"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>

// styles.css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}
.container {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    padding: 10px 15px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
}
button:hover {
    background: darkblue;
}

// script.js
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };
    
    try {
        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        document.getElementById('responseMsg').textContent = result.message;
        this.reset();
    } catch (error) {
        document.getElementById('responseMsg').textContent = 'Failed to send message.';
    }
});
