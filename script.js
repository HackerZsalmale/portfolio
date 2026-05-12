const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


document.getElementById("home").addEventListener("click", function() {
    lenis.scrollTo(0, { offset: 1000 });
});

BeforeUnloadEvent.addEventListener("beforeunload", function() {
    localStorage.setItem("scrollPosition", window.scrollY);
});

window.addEventListener("load", function() {
    const scrollPosition = localStorage.getItem("scrollPosition");
    scrollTo(0, scrollPosition);
});
