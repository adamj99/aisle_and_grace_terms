// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  if (!menu || !overlay) return;
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// iOS waitlist form
function handleWaitlist(event) {
  event.preventDefault();
  const form = event.target;
  form.innerHTML = '<p class="waitlist-success">✓ You\'re on the list! We\'ll let you know when iOS launches.</p>';
}

// Mobile content expansion
function expandSection(button, sectionType) {
  const section = button.closest('section');
  section.classList.add('expanded');

  button.style.opacity = '0';
  button.style.transform = 'scale(0.9)';

  setTimeout(() => {
    button.style.display = 'none';
  }, 300);

  setTimeout(() => {
    const firstHiddenElement = section.querySelector(
      '.feature-card:nth-child(7), .testimonial-card:nth-child(4), .value-item:nth-child(3)'
    );
    if (firstHiddenElement) {
      firstHiddenElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 100);
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (header) {
    header.classList.toggle('scrolled', currentScroll > 50);
  }
  lastScroll = currentScroll;
});

// Section header reveal on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
