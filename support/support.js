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

// scroll to top button
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

// category cards
var categoryCards = document.querySelectorAll('.category');
for (var i = 0; i < categoryCards.length; i++) {
    categoryCards[i].addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    });
    
    categoryCards[i].addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
}


// Search box effect
var searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#4bb4e9';
        this.style.boxShadow = '0 0 10px rgba(75, 180, 233, 0.3)';
        this.style.transition = 'all 0.3s';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '';
        this.style.boxShadow = '';
    });
}



