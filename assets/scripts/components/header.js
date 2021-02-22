export function Header(parentSelector) {
  this.parentElement = document.querySelector(parentSelector);

  this.toString = function () {
    return `
    <a href="#home" class="header__home">Kenqefh</a>
    <nav class="header__nav">
      <a href="#about" class="header__link header__link--active">About</a>
      <a href="#works" class="header__link">Works</a>
      <a href="#blog" class="header__link">Blog</a>
    </nav>`;
  };
}

Header.prototype.render = function () {
  this.parentElement.innerHTML = this;
};
