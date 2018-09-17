import * as snabbdom from "snabbdom";
import h from "snabbdom/h";
import { mappingAttributes } from "./attributes";
import { Component } from "./component";
import classModule from "snabbdom/modules/class";
import eventModule from "snabbdom/modules/eventlisteners";

const computeAttrs = attrs =>
  Object.keys(attrs).reduce(mappingAttributes(attrs), {
    class: {},
    on: {}
  });

const createComponent = (TagName, attrs, children) => {
  const stringChildren = children
    .filter(child => typeof child === "string")
    .join("");

  const snabbdomChildren = children.filter(child => typeof child !== "string");

  const element = new TagName({
    children: stringChildren,
    ...attrs
  });

  const rendered = element.render();
  rendered.children = rendered.children.concat(snabbdomChildren);

  return rendered;
};

const createElement = (TagName, attrs, ...children) => {
  const realAttributes = computeAttrs(attrs || {});

  if (typeof TagName === "function") {
    return createComponent(TagName, realAttributes, children);
  }

  return h(TagName, realAttributes, children);
};

global.h = createElement;

const patch = snabbdom.init([classModule, eventModule]);

const render = (rootNode, RootComponent) => {
  const rootElement = document.querySelector(rootNode);
  const rootComponent = new RootComponent();

  rootComponent.currentNode = rootComponent.render();

  patch(rootElement, rootComponent.currentNode);
};

export { Component, render, patch };
