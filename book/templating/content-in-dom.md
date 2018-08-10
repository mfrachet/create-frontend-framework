# Display the template in the DOM

In [Template literals as template engine](/templating/template-literals.html), we've created two `tagged template literals` that we'll use to display information in the DOM.

It's time to create a `./framework/index.js` that will act as the `core` of our framework. It will simply take the previously created element and add it to a DOM node:

```javascript
export const init = (selector, component) => {
  const app = document.querySelector(selector);
  const newElement = document.createElement(component.type);
  const newTextContent = document.createTextNode(component.template);

  newElement.append(newTextContent);
  app.append(newElement);
};
```

And in `./index.js`, tell the application to start in the `#app` node by simply calling the `init` function:

```javascript
import { init } from "./framework";
import { div } from "./framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", div`Hello ${firstName} ${lastName}`);
// init("#app", p`Hello ${firstName} ${lastName}`); works as simply as moving div to p
```

---

::: tip Note on #app
If you have used the git repository with the parcel bundles, you can see an index.html at the root.

It already contains a `<div id="app"></div>` so you don't have to define it.
:::

---

We don't need the extra `console.log` and template creation anymore but simply need to export the `p` and `div` elements.

Let's remove the noise all around in `./framework/element.js`:

```javascript
const createElement = tagName => (strings, ...args) => ({
  type: tagName,
  template: strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  )
});

export const div = createElement("div");
export const p = createElement("p");
```

---

::: tip
For the purpose of this exercice, I won't show you how to create every HTML component. But since we have already built
the `createElement` function, you can add any one of them :)
:::

---

Start the application using:

```
$ yarn start
```

and check that it displays `Hello Marvin Frachet` on [http://localhost:1234/](http://localhost:1234/).
