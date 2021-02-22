import { Footer } from "./footer.js";
import { Header } from "./header.js";
import { Main } from "./main.js";

export function PageTemplate(parentSelector) {
  this.elementContainer = document.querySelector(parentSelector);

  this.toString = function () {
    return `
      <header class="js-header header"></header>
      <main class="js-main main"></main>
      <footer class="js-footer footer"></footer>
    `;
  };
}

PageTemplate.prototype.render = function () {
  this.elementContainer.innerHTML = this;
  new Header(".js-header").render();
  new Main(".js-main").render();
  new Footer(".js-footer").render();
};
