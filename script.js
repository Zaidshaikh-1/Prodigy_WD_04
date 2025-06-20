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
  window.open('Resume_3.pdf', '_blank');
}
document.querySelector('button[onclick="downloadResume()"]')?.addEventListener('click', downloadResume);

// 📬 CONTACT FORM + EMAILJS
// document.getElementById('contact-form')?.addEventListener('submit', function (e) {
//   e.preventDefault();
//   emailjs.sendForm('service_q1yzt9p', 'template_hsr956l', this, 'kjUa5NCMHVp5cuEgm')
//     .then(() => {
//       alert('✅ Message sent successfully!');
//       this.reset();
//     }, (error) => {
//       alert('❌ Error: ' + error.text);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("kjUa5NCMHVp5cuEgm");

  const form = document.getElementById("contact-form");
  const formWrapper = document.getElementById("form-wrapper");
  const successMessage = document.getElementById("success-message");
  const okButton = document.getElementById("ok-button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_q1yzt9p", "template_hsr956l", this)
      .then(() => {
        // Hide form, show success message
        formWrapper.classList.add("hide");
        successMessage.classList.add("show");
        form.reset();
      }, (error) => {
        alert("❌ Failed to send: " + error.text);
      });
  });

  okButton.addEventListener("click", () => {
    // Hide success, show form again
    successMessage.classList.remove("show");
    formWrapper.classList.remove("hide");
  });
});