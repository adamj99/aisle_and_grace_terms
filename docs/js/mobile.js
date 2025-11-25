// Mobile content expansion
function expandSection(button, sectionType) {
  const section = button.closest('section');
  section.classList.add('expanded');

  // Add fade-in animation to newly revealed items
  button.style.opacity = '0';
  button.style.transform = 'scale(0.9)';

  setTimeout(() => {
    button.style.display = 'none';
  }, 300);

  // Smooth scroll to show newly revealed content
  setTimeout(() => {
    const firstHiddenElement = section.querySelector('.feature-card:nth-child(7), .testimonial-card:nth-child(4), .value-item:nth-child(3)');
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

  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Add smooth reveal on scroll for sections (optional enhancement)
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

// Observe section headers
document.addEventListener('DOMContentLoaded', () => {
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(header);
  });
});
