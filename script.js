window.onload = function () {
  getRepos();
  getNamesAndDescriptions();
  loadCards();
};

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

const profilelink = "https://api.github.com/hackerzsalmale";

let repocount = "0";
let repos = [];

function cards() {
  console.log(profilelink); // now safe
}

function cards() {
  fetch("https://api.github.com/users/HackerZsalmale/repos")
    .then((response) => response.json())
    .then((data) => {
      let repos = data.html_url;
      console.log("Updated repos:", repos);
    })
    .catch((err) => console.error("miaw"));

  console.log("Initial repos:", repos);
}

async function getRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/HackerZsalmale/repos"
    );
    const repos = await response.json();

    const repoLinks = repos.map((repo) => repo.html_url);

    console.log("repo links: ", repoLinks);
    return repoLinks;
  } catch (err) {
    console.error("Error fetching repos:", err);
    return [];
  }
}

async function getNamesAndDescriptions() {
  try {
    const response = await fetch(
      "https://api.github.com/users/HackerZsalmale/repos"
    );
    const repos = await response.json();

    const repoNames = repos.map((repo) => repo.name);
    const descriptions = repos.map((repo) => repo.description);

    console.log("Repo names:", repoNames);
    console.log("Descriptions:", descriptions);

    return { repoNames, descriptions };
  } catch (err) {
    console.error("Error fetching repos:", err);
    return { repoNames: [], descriptions: [] };
  }
}

async function loadCards() {
  const projectslist = document.getElementsByClassName("projectlist")[0];

  const response = await fetch(
    "https://api.github.com/users/HackerZsalmale/repos"
  );
  const repos = await response.json();

  const repoLinks = repos.map((repo) => repo.html_url);
  const repoNames = repos.map((repo) => repo.name);
  const descriptions = repos.map(
    (repo) => repo.description || "No description"
  );

  projectslist.innerHTML = "";

  for (let i = 0; i < repos.length; i++) {
    projectslist.innerHTML += `
            <div class="project-card" id="${repoNames[i]}">
                <h3>${repoNames[i]}</h3>
                <p>${descriptions[i]}</p>
            </div>
        `;
  }
}

document.addEventListener("DOMContentLoaded", loadCards);

document.getElementById("open").addEventListener("click", cards);
