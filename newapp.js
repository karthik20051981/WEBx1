document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_u5kyttg', 'template_t6duoq6', this, 'Ib_qXJxrQy7M_DkH3')
        .then(function() {
            document.getElementById('responseMsg').textContent = 'Message sent successfully!';
        }, function(error) {
            document.getElementById('responseMsg').textContent = 'Failed to send message.';
        });

    this.reset();
});
