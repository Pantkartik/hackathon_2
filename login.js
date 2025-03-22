document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.navbar .login-btn');
    const signinButton = document.querySelector('.navbar .signin-btn');
    const loginContainer = document.querySelector('.login-container');
    const signinContainer = document.querySelector('.signin-container');
    const loginForm = document.getElementById('login-form');
    const signinForm = document.getElementById('signin-form');
    const errorMessageLogin = document.querySelector('.login-container .error-message');
    const errorMessageSignin = document.querySelector('.signin-container .error-message');
    const heroSection = document.querySelector('.hero');
    const infoSections = document.querySelectorAll('.info-section');

    heroSection.classList.add('visible');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    infoSections.forEach(section => {
        observer.observe(section);
    });

    loginButton.addEventListener('click', function() {
        loginContainer.style.display = 'block';
        signinContainer.style.display = 'none';
        window.scrollBy({
            top: 100,
            behavior: 'smooth'
        });
    });

    signinButton.addEventListener('click', function() {
        signinContainer.style.display = 'block';
        loginContainer.style.display = 'none';
        window.scrollBy({
            top: 100,
            behavior: 'smooth'
        });
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username === 'AXON' && password === 'KARTIK') {
            errorMessageLogin.textContent = '';
            alert('Login successful!');

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // Redirect to the new page upon successful login
            window.location.href = 'main.html';
        } else {
            errorMessageLogin.textContent = 'Invalid username or password.';
        }
    });

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signin-username').value;
        const password = document.getElementById('signin-password').value;

        if (username === 'AXON' && password === 'KARTIK') {
            errorMessageSignin.textContent = '';
            alert('Sign-in successful!');

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

          
            window.location.href = 'main.html';
        } else {
            errorMessageSignin.textContent = 'Invalid username or password.';
        }
    });
});
