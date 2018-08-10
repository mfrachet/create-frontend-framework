# Event Handling with Snabbdom

It's time to add some user interation capabilities to the framework!

## A bit of refacto

Before starting handling `events`, I would like to split some separation concerns for the sake of clarity.

I would like to extract a function called `createReducer` to make the `createElement` function more readable.

It won't be that hard: we'll simply extract the `Array.reduce` transformation function somewhere else.

```javascript
import h from "snabbdom/h";

// extract initial value with a template key, some other will appear next ;)
const initialState = {
  template: ""
};

// extract this outside the createElement function
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

We're going to create our first event handler: `onClick`.

Open `./framework/event.js` and add the following code:

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

export const User = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;
```

If everything is working well, you should now be able to see something weird on the browser like:

```
[Object object] Hello Marvin Frachet
```

Don't worry, it's **normal** :D

The reason is that we only manage `text` nodes inside our `template engine`.

We need to modify its code to take care of the `events`:

```javascript
import h from "snabbdom/h";

const initialState = {
  template: "",
  on: {} // This initial state property will help us manage event handlers in template literals
};

const createReducer = args => (acc, currentString, index) => {
  const currentArg = args[index];

  /**
   * Here, we define the behavior of an event node and this
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
In fact, it's a good practice to split libraries into smaller modules to avoid huge size dependencies in our applications.

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
