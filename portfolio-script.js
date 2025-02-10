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

<script>
  document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });
</script>