const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);





async function github() {
    window.open("https://github.qandor.hu", "_self");
}
