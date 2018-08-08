# Adding Snabbdom

In the previous step, we managed DOM nodes by ourselves. With this solution, we have to manage every kind of DOM modifications, such as text, attribute, children, events etc... It's really time consuming, and more importantly, smarter people have already managed these kind of stuff.

Snabbdom exposes a `h` API, that is quite a common way to use VDOMs.

We can now refacto the `./framework/element` to create a virtual dom node:

```javascript
import h from "snabbdom/h";

const createElement = tagName => (strings, ...args) => ({
  type: "element",
  template: h(
    tagName,
    {},
    strings.reduce(
      (acc, currentString, index) => acc + currentString + (args[index] || ""),
      ""
    )
  )
});

export const div = createElement("div");
export const p = createElement("p");
```

With our new VDOM, `./framework/index.js` will be slightly simpler. Snabbdom will manage each of the dom operations for us !

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};
```
