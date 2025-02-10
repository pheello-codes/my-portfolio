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


document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
});

// Highlight active menu item on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
