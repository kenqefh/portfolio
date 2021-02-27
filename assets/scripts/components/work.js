import { DATA } from "./../store.js";

export function Work(parentSelector) {
  this.parentElement = document.querySelector(parentSelector);

  this.toString = function () {
    const list = DATA.works.map(({ name, url, repository }) => {
      return `
        <li class="work__card">
          <a target="_blank" class="work__card_name" href="${url}">${name}</a>
          <a target="_blank" class="work__card_repository" href="${repository}">Repo >></a>
        </li>
        `;
    });
    return `
    <div class="works_container">
      <h2 class="work__title">WORKS</h2>
      <ul class="work__list">
        ${list.join("")}  
      </ul>
    </div>
    `;
  };
}

Work.prototype.render = function () {
  this.parentElement.innerHTML = this;
};
