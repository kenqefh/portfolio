export function Footer(parentSelector) {
  this.parentElement = document.querySelector(parentSelector);

  this.toString = function () {
    return `
    <p class="footer__phrase">
      &copy; Work hard to make a better world @ 2021
    </p>`;
  };
}

Footer.prototype.render = function () {
  this.parentElement.innerHTML = this;
};
