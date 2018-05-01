# Template litterals as template engine (tag: step-1)

The first step is to create a folder and a file at `./framework/element.js`. We'll use template litterals a template engine. Let's create our first template litteral handler called `div`:

```javascript
const div = (strings, ...args) => console.log(strings, args);

const firstName = "Marvin";
const lastName = "Frachet";

div`Hello ${firstName} ${lastName} !`;
```

Run the following command to check the result of such a bunch of code:

```shell
$ node ./framework/element.js
```

We can see different arrays. Let's use de `Array.reduce` function to create a string with the previous code:

```javascript
const div = (strings, ...args) =>
  strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  );

const firstName = "Marvin";
const lastName = "Frachet";

const template = div`Hello ${firstName} ${lastName} !`;
console.log(template); // It prints `Hello Marvin Frachet !`
```

Let's refacto to be able to create something else than a `div`, like a `p` for example:

```javascript
const createElement = tagName => (strings, ...args) => ({
  type: tagName,
  template: strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  )
});

const div = createElement("div");
const p = createElement("p");

const firstName = "Marvin";
const lastName = "Frachet";

const template = div`Hello ${firstName} ${lastName} !`;
// const template = p`Hello ${firstName} ${lastName} !`;
console.log(template);
```

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

Let's now decide where the app will start. In the root file (not the framework root one), like `./index.js`, let's add:

```javascript
import { init } from "./framework";
import { div } from "./framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", div`Hello ${firstName} ${lastName}`);
// init("#app", p`Hello ${firstName} ${lastName}`); works as simply as moving div to p
```

It's good, but we need to use component instead of simple `div` or `p`. Let's create a `User` component at `./src/user.js`:

```javascript
import { div } from "../framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

export const User = ({ firstName, lastName }) =>
  div`Hello ${firstName} ${lastName}`;
```

And so modify `./index.js`:

```javascript
import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", User({ firstName, lastName }));
```

# Using an existing virtual DOM library (tag: step-2)

`h` is a common way to use a virtual DOM (there's a name, but I forget it).

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

Before getting further, let's refacto a bit `./framework/element.js` for clarity purpose:

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

Now let's create a `onClick` event handler: create a file in `./framework/event.js` :

```javascript
export const onClick = f => ({
  type: "event",
  click: f
});
```

And modify the `./src/user.js`:

```javascript
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const firstName = "Marvin";
const lastName = "Frachet";

export const User = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;
```

The result is ugly and displays the full function as a _string_. Let's make this work, in `./framework/element.js`:

```javascript
import h from "snabbdom/h";

const initialState = {
  template: "",
  on: {}
};

const createReducer = args => (acc, currentString, index) => {
  const currentArg = args[index];

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
    template: h(tagName, { on }, template)
  };
};

export const div = createElement("div");
export const p = createElement("p");
```

Now we need to tell snabbdom that we want to use its own internal events system (it's snabbdom related), in `./framework/index.js`, add:

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

# Third step (adding state management)

We'll use a functional programming approach and add a new (shared) behaviour to our components using something called HOF:

In `./framework/index.js`, create a function called `createComponent` that looks like:

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};

export const createComponent = ({ template, methods = {} }) => props =>
  template(props);
```

And move the `./src/user.js` to

```javascript
import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const firstName = "Marvin";
const lastName = "Frachet";

const template = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template });
```

We're now able to add some behaviour to our components ! For example, we can add a some methods to it:

In `./framework/index.js`, add the methods props:

```javascript
export const createComponent = ({ template, methods = {} }) => props =>
  template({ ...props, methods });
```

It's now available in the component:

```javascript
import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const firstName = "Marvin";
const lastName = "Frachet";

const methods = { callMe: name => alert(name) };

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.callMe(firstName)
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods });
```

We can now make some special behaviour using these methods ! Why not to be able to modify the props ? In the `./framework/index.js`, add:

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};

let state = {};

export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => {
  state = initialState;

  const mappedMethods = Object.keys(methods).reduce(
    (acc, key) => ({
      ...acc,
      [key]: (...args) => {
        state = methods[key](state, ...args);
        console.log(state); // this prints "Thomas" as firstName :D
        return state;
      }
    }),
    {}
  );

  return props => template({ ...props, ...state, methods: mappedMethods });
};
```

And let's now change the user component:

```javascript
import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const firstName = "Marvin";
const lastName = "Frachet";

const methods = {
  changeName: (state, firstName) => ({
    ...state,
    firstName: state.firstName === "Marvin" ? "Thomas" : "Marvin"
  })
};
const initialState = { firstName: "Marvin", lastName: "Frachet" };

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Thomas")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods, initialState });
```

# Last step bringing it all together

In `./framework/index.js`, add :

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};

let state = {};

export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => {
  state = initialState;
  let previous;

  const mappedMethods = props =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args);
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props)
          });
          patch(previous.template, nextNode.template);
          previous = nextNode; // this prints "Thomas" as firstName :D
          return state;
        }
      }),
      {}
    );

  return props => {
    previous = template({ ...props, ...state, methods: mappedMethods(props) });
    return previous;
  };
};
```
