import { DATA } from "./../store.js";

export function Work(parentSelector) {
  this.parentElement = document.querySelector(parentSelector);

  this.toString = function () {
    const list = DATA.works.map(({ name, url, repository, image }) => {
      return `
        <li class="work__card">
          <img class="work__card_image" src='${image}'>
          <div class="work__card_content">
          <a target="_blank" class="work__card_name" href="${url}">${name}</a>
          <a target="_blank" class="work__card_repository" href="${repository}">Repo >></a>
          </div>
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
