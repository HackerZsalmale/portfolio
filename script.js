const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener("load", function () {
  loadContent();
});

function home() {
  document
    .getElementById("homebutton")
    .addEventListener("click", function () {
      lenis.scrollTo("#home-section", {
        offset: 0,
        immediate: false,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        force: true,
      });
    });
}

function about() {
  document
    .getElementById("aboutbutton")
    .addEventListener("click", function () {
      lenis.scrollTo("#about-section", {
        offset: 0,
        immediate: false,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        force: true,
      });
    });
}

function skills() {
  document
    .getElementById("skillsbutton")
    .addEventListener("click", function () {
      lenis.scrollTo("#skills-section", {
        offset: 0,
        immediate: false,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        force: true,
      });
    });
}

async function github() {
  window.open("https://github.qandor.hu", "_self");
}
