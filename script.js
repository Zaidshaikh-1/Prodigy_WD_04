// 🌙 DARK MODE
const darkToggle = document.getElementById('dark-toggle');
darkToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// 🍔 HAMBURGER MENU
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ⛅ SMOOTH SCROLL
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('active'); // hide nav on click (mobile)
    }
  });
});

// 📥 DOWNLOAD RESUME
function downloadResume() {
  window.open('Resume.pdf', '_blank');
}
document.querySelector('button[onclick="downloadResume()"]')?.addEventListener('click', downloadResume);

// 📬 CONTACT FORM + EMAILJS
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => {
      alert('✅ Message sent successfully!');
      this.reset();
    }, (error) => {
      alert('❌ Error: ' + error.text);
    });
});