// navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.pageYOffset > 100) {
            navbar.style.backgroundColor = '#ffffff';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    }
});

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

// Add scroll to top button
var scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑ Top';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 20px';
scrollBtn.style.backgroundColor = '#4bb4e9';
scrollBtn.style.color = 'white';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '5px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// product cards effect
var productCards = document.querySelectorAll('.product-card');
for (var i = 0; i < productCards.length; i++) {
    productCards[i].addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    });
    
    productCards[i].addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
}

// Fade in product cards when page loads
var cards = document.querySelectorAll('.product-card');
for (var i = 0; i < cards.length; i++) {
    cards[i].style.opacity = '0';
    cards[i].style.transform = 'translateY(30px)';
    cards[i].style.transition = 'all 0.6s';
    
    setTimeout(function(card) {
        return function() {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        };
    }(cards[i]), i * 150);
}



