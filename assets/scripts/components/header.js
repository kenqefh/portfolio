import { DATA } from "./../store.js";
import { Main } from "./main.js";

export function Header(parentSelector) {
  this.parentElement = document.querySelector(parentSelector);

  this.toString = function () {
    return `
    <a href="#home"
     class="js-nav-link header__home"
     data-nav-option="home"
    >Kenqefh</a>
    <nav class="header__nav">
      <a href="#about"
        data-nav-option="about"
        class="js-nav-link header__link"
      >About</a>
      
      <a href="#works"
        data-nav-option="works"
        class="js-nav-link header__link"
      >Works</a>

      <a href="#blog"
        data-nav-option="blogs"
        class="js-nav-link header__link"
      >Blog</a>
    </nav>`;
  };
}

Header.prototype.render = function () {
  this.parentElement.innerHTML = this;
  this.navClickEvent();
};

Header.prototype.navClickEvent = function () {
  const links = this.parentElement.querySelectorAll(".js-nav-link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => this.handleNavClick(e, links));
  });
};

Header.prototype.handleNavClick = function (e, links) {
  e.preventDefault();

  const selected = e.target.dataset.navOption;

  links.forEach((link) => {
    link.classList.remove("header__link--active");
  });

  if (selected !== "home") e.target.classList.add("header__link--active");

  DATA.currentMenu = selected;
  new Main(".js-main").render();
};
