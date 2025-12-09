// navbar
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.pageYOffset > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.backgroundColor = '#ffffff';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
};

// Highlight pricing cards
var priceCards = document.querySelectorAll('.price-card');
for (var i = 0; i < priceCards.length; i++) {
    priceCards[i].addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        this.style.transition = 'all 0.3s ease';
    });
    
    priceCards[i].addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
}


// Make images bigger
var images = document.querySelectorAll('img');
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
    });
    
    images[i].addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}


// current year for footer
var yearElement = document.getElementById('current-year');
if (yearElement) {
    var currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Footer links color change
var footerLinks = document.querySelectorAll('footer a');
for (var i = 0; i < footerLinks.length; i++) {
    footerLinks[i].addEventListener('mouseenter', function() {
        this.style.color = '#4bb4e9';
        this.style.textDecoration = 'underline';
    });
    
    footerLinks[i].addEventListener('mouseleave', function() {
        this.style.color = '';
        this.style.textDecoration = 'none';
    });
}








