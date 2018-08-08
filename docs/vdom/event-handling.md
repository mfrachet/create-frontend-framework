# Event Handling with Snabbdom

For now, we'll modify just a little bit `./framework/element`, to separe function concerns, but also to prepare for the next steps. Let's extract the `Array.reduce` handler and create a `createReducer` function:

```javascript
import h from "snabbdom/h";

const initialState = {
  template: ""
};

const createReducer = args => (acc, currentString, index) => ({
  ...acc,
  template: acc.template + currentString + (args[index] || "")
});

const createElement = tagName => (strings, ...args) => {
  const { template } = strings.reduce(createReducer(args), initialState);

  return {
    type: "element",
    template: h(tagName, {}, template)
  };
};

export const div = createElement("div");
export const p = createElement("p");
```

It's time to create an `onClick` event handler: create a file in `./framework/event.js` :

```javascript
export const onClick = f => ({
  type: "event",
  click: f
});
```

_It's a specific API that we'll use later in the application_

And modify the `./src/user.js`:

```javascript
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const firstName = "Marvin";
const lastName = "Frachet";

export const User = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;
```

The result is a bit weird and displays the full function as a _string_.
Actually, we only have made manage text nodes.

We need to add some behaviors inside our element creator, to make it aware of other node types than text, like events, or even attributes:

```javascript
import h from "snabbdom/h";

const initialState = {
  template: "",
  on: {} // Snabbdom needs a on: {} object to manage events
};

const createReducer = args => (acc, currentString, index) => {
  const currentArg = args[index];

  // Here, we define the behaviour of an event node
  if (currentArg && currentArg.type === "event") {
    return { ...acc, on: { click: currentArg.click } };
  }

  return {
    ...acc,
    template: acc.template + currentString + (args[index] || "")
  };
};

const createElement = tagName => (strings, ...args) => {
  const { template, on } = strings.reduce(createReducer(args), initialState);

  return {
    type: "element",
    template: h(tagName, { on }, template) // the second argument concerns attributes, properties and events
  };
};

export const div = createElement("div");
export const p = createElement("p");
```

---

_This part is Snabbdom specific. By default Snabbdom doesn't know how to manage events. This way, we sometime need to plug some other modules. In our application, we'll tell Snabbdom to use its own internal event listener system_

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};
```
