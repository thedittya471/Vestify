// Get current year for footer
var yearElement = document.getElementById('current-year');
if (yearElement) {
    var currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Form submission
var loginForm = document.querySelector('form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var userId = document.getElementById('userId').value;
        var password = document.getElementById('password').value;
        
        if (userId === '' || password === '') {
            alert('Please fill in all fields!');
            return;
        }
        
        if (userId.length < 3) {
            alert('Client ID must be at least 3 characters!');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters!');
            return;
        }

        alert('Login successful! Welcome ' + userId);
        console.log('User logged in: ' + userId);

        setTimeout(function() {
            window.location.href = '../index.html';
        }, 1000);
    });
}

// Input focus effect
var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function() {
        this.style.borderColor = '#4bb4e9';
        this.style.boxShadow = '0 0 10px rgba(75, 180, 233, 0.3)';
        this.style.transition = 'all 0.3s';
    });
    
    inputs[i].addEventListener('blur', function() {
        this.style.borderColor = '';
        this.style.boxShadow = '';
    });
}

// Button hover effect
var submitBtn = document.querySelector('.btn-primary');
if (submitBtn) {
    submitBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(75, 180, 233, 0.4)';
        this.style.transition = 'all 0.3s';
    });
    
    submitBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '';
    });
}


// Animate auth box on page load
var authBox = document.querySelector('.auth-box');
if (authBox) {
    authBox.style.opacity = '0';
    authBox.style.transform = 'translateY(30px)';
    authBox.style.transition = 'all 0.8s';
    
    setTimeout(function() {
        authBox.style.opacity = '1';
        authBox.style.transform = 'translateY(0)';
    }, 100);
}
