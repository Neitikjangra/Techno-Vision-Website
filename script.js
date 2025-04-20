
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if(this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Research Tab Functionality
function openResearchTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.research-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.research-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to the clicked tab
    event.currentTarget.classList.add('active');
}

// Countdown Timer for Hackathon
function updateCountdown() {
    const hackathonDate = new Date('Oct 15, 2023 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = hackathonDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Animate elements when scrolling
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .event-card, .blog-card, .team-member');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.feature-card, .event-card, .blog-card, .team-member').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
