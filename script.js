function me() {
  document.getElementById("me").scrollIntoView({ behavior: "smooth" });
  document
    .getElementById("card")
    .classList.add("animate__animated", "animate__bounceIn");
}
function project() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}
function link() {
  document.getElementById("links").scrollIntoView({ behavior: "smooth" });
}

function soon() {
  alert("Coming soon!");
}

function helloworld() {
  alert("Hello World!");
}

let clickCount = 0;
let clickTimer = null;

function asd() {
  clickCount++;
  if (clickCount === 5) {
    alert("Hello World!");
    clickCount = 0;
    clearTimeout(clickTimer);
    clickTimer = null;
    console.log("You found the secret!");
  } else {
    if (clickTimer) clearTimeout(clickTimer);
    clickTimer = setTimeout(function () {
      clickCount = 0;
      clickTimer = null;
    }, 500); // 500ms window for triple click
  }
}

document.getElementById("menu").onclick = function () {
  document.getElementById("mobile-links").classList.toggle("show");
};

document.addEventListener("load", function () {
  document.body.style.transition = "transition: 0.3s ease-in";
});

document.addEventListener("window.onload", function () {
  document.body.style.transition = "0.3s ease-in";
});

const profile = "https://hackerzsalmale.github.io";

const projectPaths = {
  projectcard1: "profilecard",
  projectcard2: "turogomboc",
  projectcard3: "kovacsanna",
  projectcard4: "random",
  projectcard5: "githubstatpage",
  projectcard6: "appthatshowsweb",
};

document.getElementById("projects").addEventListener("click", (event) => {
  const card = event.target.closest("div[id^='projectcard']");
  if (card && projectPaths[card.id]) {

    window.open(`${profile}/${projectPaths[card.id]}/`, "_blank");

  }
});
