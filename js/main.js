/* AUTO YEAR */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* =========================
   TYPEWRITER – FINAL LOGIC
========================= */
const typeTarget = document.getElementById("typewriter");
const typeText = "BUILDING WORKS · ROAD WORKS · WATER WORKS";

let index = 0;
let completed = false;
let typingInterval = null;

function startTyping() {
  if (!typeTarget) return;

  clearInterval(typingInterval);
  index = 0;
  completed = false;
  typeTarget.textContent = "";

  typingInterval = setInterval(() => {
    if (index < typeText.length) {
      typeTarget.textContent += typeText.charAt(index);
      index++;
    } else {
      completed = true;
      clearInterval(typingInterval);
    }
  }, 120);
}

/* Start once on load */
startTyping();

/* Restart ONLY on scroll */
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (completed && Math.abs(window.scrollY - lastScrollY) > 10) {
    startTyping();
  }
  lastScrollY = window.scrollY;
});

/* =========================
   SCROLL ANIMATION
========================= */
const animatedElements = document.querySelectorAll(".animate");

const scrollObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("in-view", entry.isIntersecting);
    });
  },
  { threshold: 0.35 }
);

animatedElements.forEach(el => {
  scrollObserver.observe(el);
});
