// Menu móvil
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            navLinks.classList.remove('active');
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            // Simular envío exitoso
            alert(`¡Gracias por tu mensaje, ${name}! Nos pondremos en contacto contigo pronto.`);
            contactForm.reset();
        } else {
            alert('Por favor completa todos los campos obligatorios.');
        }
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(44, 62, 80, 1)';
    }
});

// Animaciones al hacer scroll
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

animateElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// Animación para los paquetes al aparecer
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});