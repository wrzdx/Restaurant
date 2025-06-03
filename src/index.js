import "./styles.css";
import loadHomepage from "./homepage";
import loadMenu from "./menu";
import loadAbout from "./about";

function start() {
  function navHandler(e) {
    if (e.target.nodeName !== "BUTTON") return;
    for (let btn of e.target.parentElement.children) {
      btn.classList.remove("active");
    }

    e.target.classList.add("active");
    if (e.target.innerText === "Home") {
      loadHomepage();
    } else if ((e.target.innerText === "Menu")) {
      loadMenu();
    } else {
      loadAbout();
    }
  }

  document.querySelector("nav").addEventListener("click", navHandler);
  loadHomepage();
}


start();