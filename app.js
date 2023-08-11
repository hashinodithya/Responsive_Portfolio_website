function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  // Get all the details containers
// Get all the experience buttons
const experienceButtons = document.querySelectorAll('.experience-btn');

// Add click event listener to each button
experienceButtons.forEach(button => {
  const detailsContainer = button.parentElement;
  const hiddenContent = detailsContainer.querySelector('.hidden-content');

  // Toggle hidden content when button is clicked
  button.addEventListener('click', () => {
    hiddenContent.classList.toggle('show');
  });
});

