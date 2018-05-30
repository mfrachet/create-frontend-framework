[Slides available here](https://docs.google.com/presentation/d/1QeK3f9Ycae0oLG5CCgrLsYbxTNd7iamPBGkotvxWCzI/edit?usp=sharing)

_This project aims to provide a step by step implementation of a "frontend framework". It's only for learning purpose and allows to take a first shot of internal stuff such as templating, state management, and the use of Virtual DOMs._

[NEW: here's another way to implement it using React API and JSX](https://github.com/mfrachet/create-frontend-framework/tree/jsx)

---

* [Template](#template)
  * [Template litterals as template engine](#template-litterals-as-template-engine)
  * [Display content in the DOM](#display-content-in-the-dom)
  * [Our first component](#our-first-component)
* [Using an existing virtual DOM library](#using-an-existing-virtual-dom-library)
  * [Adding Snabbdom](#adding-snabbdom)
  * [Event handling](#event-handling)
* [State management](#state-management)
  * [Using methods inside the component](#using-methods-inside-the-component)
  * [Modifying the component props with state](#modifying-the-component-props-with-state)
* [Last step bringing it all together](#last-step-bringing-it-all-together)

---

# Template

_Available at `$ git checkout step-1`_

## Template litterals as template engine

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

While using templat litterals, the first argument is an array of strings corresponding to the static string of the evaluated element. The second (or n) arguments are the interpolated values. In the previous example, we use destructuring to create an array of the interpolated values because we don't know have much of them exists.

Let's use `Array.reduce` to create a real string with the static and interpolated ones:

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

For now, it's pretty good, we're able to create a simple `div`. Let's abstract a little bit the code to let us create any kind of elements.

Let's create an higher order function that will accept a first argument, the `tagName`, and that will return a child function which is our real template string handler:

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

## Display content in the DOM

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

## Our first component

It's great, but we need to use component instead of simple `div` or `p`. We want the framework to allow for components creation. And it as simply as creating a function that wraps elements.

Create a file at `./src/user.js` and add the following code:

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

# Using an existing virtual DOM library

_Available at `$ git checkout step-2`_

## Adding Snabbdom

In the previous step, we managed DOM nodes by ourselves. With this solution, we have to manage every kind of DOM modifications, such as text, attribute, children, events etc... It's really time consuming, and more importantly, smarter people have already managed these kind of stuff.

You've probably heard of Virtual DOM. It's a concept that aims to represent and manipule DOM nodes in plain Javascript objects. Modification would happen only on the virtual tree and be applied only at the end of the process to the real DOM. The main advantage is that it's really really faster than DOM manipulations, and really easy to use. DOM operations can be batched etc...

It exists multiple Virtual DOM implementations. In this project, we'll use `snabbdom`, a function oriented one (present in `Vue` or `Cyclejs`).

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

## Event handling

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

# State management

_Available at `$ git checkout step-3`_

The state of an application is kind of like a snapshot of it at a specific time.
Let's represent it from a programming point of view:

```javascript
const t1State = { firstName: "Marvin", lastName: "Frachet" };

const t2State = transform(t1State, { lastName: "Thomas" });
// t2State is now { firstName: "Marvin", lastName: "Thomas" }
```

Every frontend framework uses its own internal way to `transform` state. For the sake of learning and clarity, I'll try to stick as much as possible to the previous definition.

For now, we need to create a shared behaviour between every of our components: we need to make any created component able to manage its own internal state.

In functional programming, when we want to add a specific and shared behaviour to a function, we use to wrap it in another function, called HOF, a higher order function.

In `./framework/index.js`, create a function called `createComponent` that will allow the state management:

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

For now, this function only displays the template, let's make it incrementally.

Then make our `User` component a real `OurFrameworkName` oriented component (like `extends React`, `new Vue` or `@Component` in other frameworks).

In the `./src/user.js`, simply wrap the `User` function with our previously `createComponent` one:

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

## Using methods inside the component

We're now able to add some behaviour to all of our components, at one place ! It's time to add some methods inside the component.

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

## Modifying the component props with state

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

_Available at `$ git checkout step-4`_

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
