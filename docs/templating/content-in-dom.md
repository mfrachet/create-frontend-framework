# Display the template in the DOM

We'll now create a `./framework/index.js` that will act as the `core` of our framework. For now, it will simply take the previously created element and add it to a DOM node.

```javascript
export const init = (selector, component) => {
  const app = document.querySelector(selector);
  const newElement = document.createElement(component.type);
  const newTextContent = document.createTextNode(component.template);

  newElement.append(newTextContent);
  app.append(newElement);
};
```

We don't need console logs and template creation anymore. We simply need to export the `p` and `div` elements, let's remove the noise all around in `./framework/element`

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

We now need to attach our element to a specific and existing DOM node: where should the application stars ?

In `./index.js`, the application root file, we will tell that the application will start in the `#app` document node, by simply calling the previously create `init` function:

```javascript
import { init } from "./framework";
import { div } from "./framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", div`Hello ${firstName} ${lastName}`);
// init("#app", p`Hello ${firstName} ${lastName}`); works as simply as moving div to p
```
