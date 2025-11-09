const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('menu-toggle');

toggleBtn.addEventListener('click', () => {
  // Toggle sidebar visibility
  sidebar.classList.toggle('show');
  sidebar.classList.toggle('hide');
});
