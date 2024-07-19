document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorElement = document.getElementById('error');
    
    // Clear previous error messages
    errorElement.textContent = '';

    // Simple validation checks
    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match.';
        return;
    }

    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Simulate form submission
    alert('Form submitted successfully!');

    // Here you would typically send the form data to the server, e.g.:
    // fetch('/signup', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ username, email, password })
    // }).then(response => response.json()).then(data => {
    //     // Handle response data
    // }).catch(error => {
    //     console.error('Error:', error);
    // });
});