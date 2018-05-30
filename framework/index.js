import * as snabbdom from "snabbdom";
import h from "snabbdom/h";
import { mappingAttributes } from "./attributes";
import { Component } from "./component";
import classModule from "snabbdom/modules/class";
import eventModule from "snabbdom/modules/eventlisteners";

global.h = (tagName, attrs = {}, ...children) => {
  return h(
    tagName,
    Object.keys(attrs).reduce(mappingAttributes(attrs), { class: {}, on: {} }),
    children
  );
};

const patch = snabbdom.init([classModule, eventModule]);

const render = (rootNode, rootComponent) => {
  const rootElement = document.querySelector(rootNode);

  rootComponent.currentNode = rootComponent.render();

  patch(rootElement, rootComponent.currentNode);
};

export { Component, render, patch };
