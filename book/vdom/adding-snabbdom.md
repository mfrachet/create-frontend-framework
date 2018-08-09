# Adding Snabbdom

When we decided to use [template litterals as template engine](/templating/template-literals.html), we have managed to create DOM node by hand, using the standard `document` APIs.

It means that it's our responsibility to manage every possible modifications happening on any kind of possible node.

In the previous section [what's a VDOM](/vdom/intro.html), we've seen that VDOMs are a great way to manage performances issues dealing with the DOM.

This way, let's make our framework better and rely on [snabbdom](https://github.com/snabbdom/snabbdom) VDOM to handle DOM modifications.

## Install snabbdom

Simply install it from `npm` or `yarn`:

```
$ yarn install snabbdom
```

## Delegate the DOM manipulations to snabbdom

We can now refacto the `./framework/element.js` to create a VDOM node instead of a real DOM node:

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

---

::: tip Note on h

`h` is commonly used to define virtual nodes. The `h` means `hyperscript`.
:::

---

::: tip Note on moving type from tagName to "element"

This will help us manage different operations later, like events. `element` helps to distinguish which kind of interpolated values
our `tagged template literal` deals with. `template literals` doesn't distinguish DOM nodes or `events` attributes such as `onClick` etc...

[Check this link for more on the type](https://github.com/mfrachet/frontend-example/blob/master/framework/elements/element.reducer.js#L13)
:::

## Spawning the app with the VDOM

With our new VDOM, `./framework/index.js` will be slightly simpler. [Snabbdom](https://github.com/snabbdom/snabbdom) will manage each of the dom operations for us:

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};
```
