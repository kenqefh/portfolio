import { PageTemplate } from "./components/page_template.js";

function start() {
  const page = new PageTemplate("#root");
  page.render();
}

start();
