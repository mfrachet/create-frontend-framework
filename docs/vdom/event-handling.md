# Event Handling with Snabbdom

It's time to add some user interation capabilities to the framework!

## A bit of concern separation

We'll modify just a little bit `./framework/element.js`, to separe function concerns, but also to prepare for the next steps.

Let's extract the `Array.reduce` handler and create a `createReducer` function:

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

## Our first event handler

Let's create an empty file `./framework/event.js`.

This one will contain all of the `event handlers` definition, such as the `onClick` one:

```javascript
export const onClick = f => ({
  type: "event",
  click: f
});
```

And import it in `./src/user.js`:

```javascript
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const firstName = "Marvin";
const lastName = "Frachet";

export const User = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;
```

If everything is working well, you should now be able to see something weird on the browser like the full function as a _string_.

Don't worry, it's **normal** :D

The fact is that we only have managed `text` nodes inside our `template engine`.

We need to modify its code to take care of the `events`:

```javascript
import h from "snabbdom/h";

const initialState = {
  template: "",
  on: {} // Snabbdom needs a on: {} object to manage events
};

const createReducer = args => (acc, currentString, index) => {
  const currentArg = args[index];

  /**
   * Here, we define the behaviour of an event node and this
   * is where the type is important :D
   */
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

::: tip Snabbdom specific
By default Snabbdom doesn't know how to manage events. We need to tell him that we want to use its internal event handler.
In fact, it's a good practice to split libraries into smaller modules to avoid huge libraries and application of multiple megabytes.

We have to modify our `./framework/index.js` to look like:

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

:::

After the reload, if you click the text on the screen, you should see an `alert` on the screen :)
