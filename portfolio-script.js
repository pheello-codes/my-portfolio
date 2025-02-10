// Search Functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const projectCards = document.querySelectorAll('.project-card');

searchButton.addEventListener('click', filterProjects);
searchInput.addEventListener('keyup', filterProjects);

function filterProjects() {
  const searchTerm = searchInput.value.toLowerCase();

  projectCards.forEach((card) => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const techStack = card.querySelector('.tech-stack').textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm) || techStack.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


// Toggle menu on click
document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
});

// Smooth scrolling for navbar links
document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId); // Find the target section

    if (targetSection) {
      const headerOffset = document.querySelector('.portfolio-header').offsetHeight;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Highlight the clicked link
      document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Highlight active menu item on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu li a');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6 // Adjust this value as needed
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(id)) {
          link.classList.add('active');
        }
      });
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});