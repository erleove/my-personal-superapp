import "./style.css";
import javascriptLogo from "./javascript.svg";

const layout = (container, item) => `
  <div class="${container}">
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <div class="${item}">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
  </div>
`;

const routes = [
  { path: "/", view: () => "<h1>Главная</h1><p>Добро пожаловать!</p>" },
  { path: "/base", view: () => layout("container", "item") },
  { path: "/flex-base", view: () => layout("flex-container", "flex-item") },
  {
    path: "/insta",
    view: () => layout("insta-container", "insta-container-item"),
  },
];

function router() {
  const match = routes.find((r) => r.path === location.pathname) || routes[0];
//   document.querySelector("#app").innerHTML = match.view();
}

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

window.addEventListener("popstate", router);

router();
