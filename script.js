// Mobile Navigation Toggle
const navToggle = document.createElement('div');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.nav-container').appendChild(navToggle);

const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Typing Animation
const typeText = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeText(heroTitle, originalText, 80);
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Skill tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #007bff;
    color: white;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1000;
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
    } else {
        scrollTopBtn.style.opacity = '0';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation (if contact form exists)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff4757';
                isValid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        }
    });
}