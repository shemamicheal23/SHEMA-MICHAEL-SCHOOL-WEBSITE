// script.js

// Function to validate the login form
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Simple validation for demo purposes
    alert("Login successful! Welcome, " + username);
    return true;
}

// Function to validate the contact form
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Simple validation for demo purposes
    alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
    return true;
}

// Add event listeners to the forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form form');
    const contactForm = document.querySelector('.contact-form form');

    if (loginForm) {
        loginForm.onsubmit = (event) => {
            if (!validateLoginForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        };
    }

    if (contactForm) {
        contactForm.onsubmit = (event) => {
            if (!validateContactForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        };
    }
});
