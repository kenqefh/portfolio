export function About(parentSelector) {
  this.parentElement = document.querySelector(parentSelector);

  this.toString = function () {
    return `
    <div class="home">
      <h1 class="home__welcome">
        Aloha!<br />
        I'm <b class="home__welcome--name">Frank Dominguez.</b>
      </h1>
      <h2 class="home__career">Full stack web developer</h2>
      <div class="home__social_network">
        <a href="#" class="home__link">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="home__link">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="home__link">
          <i class="fab fa-github-alt"></i>
        </a>
      </div>
    </div>`;
  };
}

About.prototype.render = function () {
  this.parentElement.innerHTML = this;
};
