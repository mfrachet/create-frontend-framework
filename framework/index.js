import * as snabbdom from "snabbdom";
import classModule from "snabbdom/modules/class";
import eventModule from "snabbdom/modules/eventlisteners";

import { Component } from "./component";
import { createElement } from "./element";

global.h = createElement;

const patch = snabbdom.init([classModule, eventModule]);

const render = (rootNode, RootComponent) => {
  const rootElement = document.querySelector(rootNode);
  const rootComponent = new RootComponent();

  rootComponent.currentNode = rootComponent.render();

  patch(rootElement, rootComponent.currentNode);
};

export { Component, render, patch };
