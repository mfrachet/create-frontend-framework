import h from "snabbdom/h";
import { computeAttrs } from "./attributes";

export const createComponent = (Component, attrs, children) => {
  const snabbdomChildren = children.filter(child => typeof child !== "string");
  const stringChildren = children
    .filter(child => typeof child === "string")
    .join("");

  const component = new Component({
    children: stringChildren,
    ...attrs
  });

  const rendered = component.render();
  rendered.children = rendered.children.concat(snabbdomChildren);

  return rendered;
};

export const createElement = (tagName, attrs, ...children) => {
  const realAttributes = computeAttrs(attrs || {});

  if (typeof tagName === "function") {
    return createComponent(tagName, realAttributes, children);
  }

  return h(tagName, realAttributes, children);
};
