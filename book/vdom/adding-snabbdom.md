# Adding Snabbdom

When we decided to use [template literals as template engine](/templating/template-literals.html), we have managed to create DOM node by hand, using the standard `document` APIs.

It means that it's our responsibility to manage every possible modifications happening on any kind of possible node.

In the previous section [what's a VDOM](/vdom/intro.html), we've seen that VDOMs are a great way to manage performance issues dealing with the real DOM.

Let's add a VDOM in our framework so that it will apply DOM modifications only if necessary, like pros :D!

In this project, I've chosen to use [snabbdom](https://github.com/snabbdom/snabbdom) for DOM manipulations. Note that you're free to chose which one best matches your needs.

## Install snabbdom

Using `npm` or `yarn`:

```
$ yarn install snabbdom
```

## Delegate the DOM manipulations to snabbdom

We can now refacto the `./framework/element.js` to delegate our DOM node creation to the VDOM.

We're going to deal with `virtual node` thanks to `h` of `snabbdom`:

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
In the previous snippet, I have moved the `type: tagName` to `type: 'element'`.

This will help us manage different operations later, like events. `element` helps to distinguish which kind of interpolated values
our `tagged template literal` deals with. `template literals` doesn't distinguish DOM nodes or `events` attributes such as `onClick` etc...

Don't worry about this for now, we'll see a concrete case later :)

[Check this link for more on the type](https://github.com/mfrachet/frontend-example/blob/master/framework/elements/element.reducer.js#L13)
:::

## Spawning the app with the VDOM

Thanks to the VDOM abstractions, our `./framework/index.js` will be slightly simpler:

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};
```

[Snabbdom](https://github.com/snabbdom/snabbdom) can now manage each dom operation for us.
