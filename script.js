// Main JavaScript Application
class SolarAuditApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        // this.setupIntersectionObserver(); // Lazy loading deshabilitado
        this.initializeAnimations();
    }

    setupEventListeners() {
        // Form submission
        const form = document.getElementById('auditForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // FAQ toggle
        document.querySelectorAll('.faq-item button').forEach(button => {
            button.addEventListener('click', (e) => this.toggleFAQ(e));
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleAnchorClick(e));
        });

        // Navigation fixed scroll effect
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = {
            name: document.getElementById('name').value,
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            zone: document.getElementById('zone').value
        };

        // Validate form
        if (!this.validateForm(formData)) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos correctamente.'
            });
            return;
        }

        // Send via EmailJS using the form fields
        emailjs.sendForm(
            'service_tl02tvj',
            'template_unqyzh9',
            form
        )
        .then(() => {
            // Show success message only after successful send
            this.showSuccessMessage(formData);
            // Reset form
            form.reset();
        })
        .catch(error => {
            console.error('EmailJS error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al enviar',
                text: 'Por favor, inténtalo de nuevo en unos minutos.'
            });
        });

        // Log form data for debugging
        console.log('Form data (submitted):', formData);
    }

    validateForm(data) {
        return (
            data.name.trim() !== '' &&
            data.company.trim() !== '' &&
            this.isValidEmail(data.email) &&
            this.isValidPhone(data.phone) &&
            data.zone.trim() !== ''
        );
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/;
        return phoneRegex.test(phone);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showSuccessMessage(data) {
        // SweetAlert2 success modal
        Swal.fire({
            icon: 'success',
            title: '¡Solicitud recibida!',
            html: `Gracias <strong>${data.name}</strong>, hemos recibido tu solicitud.<br/>` +
                  `Te contactaremos en menos de 24h por WhatsApp al número <strong>${data.phone}</strong>.`,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#7c3aed'
        });
    }

    toggleFAQ(e) {
        const button = e.currentTarget;
        const faqItem = button.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const icon = button.querySelector('span');

        // Close other open FAQs instantly
        document.querySelectorAll('.faq-item .faq-answer:not(.hidden)').forEach(openAnswer => {
            if (openAnswer !== answer) {
                // Remove transition temporarily
                openAnswer.style.transition = 'none';
                openAnswer.classList.add('hidden');
                openAnswer.closest('.faq-item').querySelector('span').textContent = '+';
                // Re-enable transition
                setTimeout(() => { openAnswer.style.transition = ''; }, 0);
            }
        });

        // Toggle current FAQ instantly
        answer.style.transition = 'none';
        answer.classList.toggle('hidden');
        icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
        // Re-enable transition
        setTimeout(() => { answer.style.transition = ''; }, 0);
    }

    handleAnchorClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            const headerHeight = 64; // height of fixed header
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    handleScroll() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    }

    setupIntersectionObserver() {
        // Intersection observer deshabilitado - carga todo al instante
    }

    initializeAnimations() {
        // Add animation to elements on load
        const elements = document.querySelectorAll('h2, h3, p, .card-hover');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.animation = `fadeIn 0.6s ease-out ${index * 0.05}s forwards`;
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SolarAuditApp();
    initEmailJS();
});

// Utility functions

// Format phone number
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    if (value.length === 9) {
        input.value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
    }
}

// Track user interactions
function trackEvent(eventName, data = {}) {
    console.log(`Event: ${eventName}`, data);
    // Here you would send to analytics service
}

// Utility for creating elements
function createElement(tag, classes = '', content = '') {
    const element = document.createElement(tag);
    if (classes) {
        element.className = classes;
    }
    if (content) {
        element.innerHTML = content;
    }
    return element;
}

function initEmailJS() {
  // Inicializar EmailJS
    emailjs.init("GmXSS8VYvATHHgmlg");
}

