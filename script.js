function printCV() {
  window.print();
}
function printCV() {
    window.print();
}
function printCV() {
    window.print();
}


document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTopBtn');
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle sections on title click
document.querySelectorAll('.toggle-section h2').forEach(header => {
  header.style.cursor = 'pointer';
  header.addEventListener('click', () => {
    const section = header.parentElement;
    section.classList.toggle('collapsed');
  });
});
