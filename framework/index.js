import * as snabbdom from "snabbdom";
import h from "snabbdom/h";
import { mappingAttributes } from "./attributes";
import { Component } from "./component";
import classModule from "snabbdom/modules/class";
import eventModule from "snabbdom/modules/eventlisteners";

global.h = (TagName, attrs, ...children) => {
  if (typeof TagName === "function") {
    const element = new TagName({ children: children.join(""), ...attrs });
    return h(
      "div",
      Object.keys(attrs || {}).reduce(mappingAttributes(attrs), {
        class: {},
        on: {}
      }),
      element.render()
    );
  }
  return h(
    TagName,
    Object.keys(attrs || {}).reduce(mappingAttributes(attrs), {
      class: {},
      on: {}
    }),
    children
  );
};

const patch = snabbdom.init([classModule, eventModule]);

const render = (rootNode, RootComponent) => {
  const rootElement = document.querySelector(rootNode);
  const rootComponent = new RootComponent();

  rootComponent.currentNode = rootComponent.render();

  patch(rootElement, rootComponent.currentNode);
};

export { Component, render, patch };
