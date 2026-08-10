const header = document.getElementById("header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const backTop = document.querySelector(".back-top");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  backTop.classList.toggle("show", window.scrollY > 500);
});

backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("[data-service]").forEach(cardLink => {
  cardLink.addEventListener("click", () => {
    const service = cardLink.dataset.service;
    const select = document.getElementById("service");
    if(select) select.value = service;
  });
});

document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const location = document.getElementById("location").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
`Hello Peter's Aircon & Refrigeration Services.

I would like to request a service/quote.

Name: ${name}
Phone: ${phone}
Service: ${service}
Location: ${location}
Problem/Request: ${message}

I found your business through your website.`;

  window.open(`https://wa.me/27753230827?text=${encodeURIComponent(text)}`, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
