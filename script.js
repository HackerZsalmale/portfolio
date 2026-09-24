

/* ────────────────────────────────────────────────
   IntersectionObserver – show elements on scroll
   ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);   // optional: stop observing once shown
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});


requestAnimationFrame(raf);

window.addEventListener("load", function () {
  loadContent();
});

function bindScrollButton(buttonId, sectionId) {
  const button = document.getElementById(buttonId);

  if (!button) return;

  button.addEventListener("click", function () {
    const target = document.querySelector(sectionId);

    if (typeof lenis !== "undefined" && lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(sectionId, {
        offset: 0,
        immediate: false,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        force: true,
      });
      return;
    }

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function home() {
  bindScrollButton("homebutton", "#home-section");
}

function about() {
  bindScrollButton("aboutbutton", "#about-section");
}

function skills() {
  bindScrollButton("skillsbutton", "#skills-section");
}

document.addEventListener("DOMContentLoaded", () => {
  home();
  about();
  skills();
});

async function github() {
  window.open("https://github.qandor.hu", "_self");
}
