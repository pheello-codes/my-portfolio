// Open Modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Close Modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// Timeline scroll animation
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the item is visible
);

timelineItems.forEach((item) => {
  observer.observe(item);
});

// Smooth scrolling for navbar links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId); // Find the target section
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll
          block: 'start' // Align to the top of the section

        
        });
      }
    });
  });
  
  // Highlight active section on scroll
  const sections = document.querySelectorAll('section'); // Get all sections
  const navLinks = document.querySelectorAll('.menu a'); // Get all navbar links
  
  window.addEventListener('scroll', () => {
    let current = '';
  
    // Check which section is currently in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    // Add 'active' class to the corresponding navbar link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

// Smooth scrolling for navbar links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId); // Find the target section
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll
          block: 'start' // Align to the top of the section
        });
      }
    });
  });

// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close menu when a link is clicked (optional)
menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// form handling
const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Simulate form submission (replace with actual API call)
  console.log('Form Data:', data);

  // Show success message
  alert('Thank you! Your message has been sent.');
  form.reset(); // Clear the form
});