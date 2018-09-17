import * as snabbdom from "snabbdom";
import classModule from "snabbdom/modules/class";
import eventModule from "snabbdom/modules/eventlisteners";

import { Component } from "./component";
import { createElement } from "./element";

global.h = createElement;

const patch = snabbdom.init([classModule, eventModule]);

const render = (rootNode, RootComponent) => {
  const rootElement = document.querySelector(rootNode);
  patch(rootElement, RootComponent);
};

export { Component, render, patch };
