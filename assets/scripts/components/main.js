import { DATA } from "../store.js";
import { About } from "./about.js";
import { Work } from "./work.js";

export function Main(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
}

Main.prototype.render = function () {
  this.loadContent();
};

Main.prototype.loadContent = function () {
  console.log(DATA.currentMenu);
  switch (DATA.currentMenu) {
    case "home":
      new About(this.parentSelector).render();
      break;
    case "about":
      new About(this.parentSelector).render();
      break;
    case "works":
      new Work(this.parentSelector).render();
      break;
    case "blog":
      this.parentElement.innerHTML = "";
      break;
  }
};
