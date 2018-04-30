import * as snabbdom from "snabbdom";
const patch = snabbdom.init([]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};
