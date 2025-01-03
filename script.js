document.addEventListener("DOMContentLoaded", () => {
  // Define the Navbar HTML
  const navbarHTML = `
    <nav class="bottom-menu">
      <a href="task.html" id="task">Task</a>
      <a href="invite.html" id="invite">Invite</a>
      <a href="index.html" id="home">Home</a>
      <a href="stats.html" id="stats">Stats</a>
      <a href="settings.html" id="settings">Settings</a>
    </nav>
  `;

  // Inject Navbar HTML into the placeholder
  const navbarElement = document.getElementById('navbar');
  if (navbarElement) {
    navbarElement.innerHTML = navbarHTML;
  }

  // Highlight the active menu item based on the current URL
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
  const menuLinks = document.querySelectorAll('.bottom-menu a');

  menuLinks.forEach(link => {
    // Add 'active' class if link matches current page
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
