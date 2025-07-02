
const btn = document.getElementById('menu-btn');
const submenu = document.getElementById('submenu');

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Fermer le menu si on clique ailleurs
document.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && !submenu.contains(e.target)) {
    submenu.style.display = 'none';
  }
});