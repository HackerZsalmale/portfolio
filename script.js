const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);







window.addEventListener("load", function() {
    loadContent();
});

async function loadContent() {

const homesection = 1;
const aboutsection = 0;
const skillssection = 0;

if (homesection === 1) {
    document.getElementById("home-section").style.display = "flex";
} else {
    document.getElementById("home-section").style.display = "none";
};

if (aboutsection === 1) {
    document.getElementById("about-section").style.display = "flex";
} else {
    document.getElementById("about-section").style.display = "none";
};

if (skillssection === 1) {
    return;
} else {
    document.getElementById("skills-section").style.display = "none";
};

if (homesection === 1 && aboutsection === 0 && skillssection === 0) {
  document.body.style.height = "92vh";
    document.getElementById("home-section").style.height = "92vh";
};

}

document.getElementById("github").addEventListener("click", function() {
    window.open("https://github.qandor.hu", "_self");
});


