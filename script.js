// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark Mode Toggle with Memory
const toggleBtn = document.getElementById("mode-toggle");
if(localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Initialize EmailJS v4
(function(){
  emailjs.init({
    publicKey: "FSvxw5QcuLtZlP3k_", // your Public Key
  });
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_84h3njx", "template_s305oxk", this)
    .then(() => {
      document.getElementById("form-status").innerText = "✅ Message sent successfully!";
      document.getElementById("form-status").style.color = "green";
      this.reset();
    }, (err) => {
      document.getElementById("form-status").innerText = "❌ Failed to send message. Please try again.";
      document.getElementById("form-status").style.color = "red";
      console.error("Error:", err);
    });
});


