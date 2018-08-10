# Modify the state of our app

It's our time to work with `change detection` mechanisms!

## Mutating functions in component definition

We're going to add the `methods` objects that we've created in [Our own state management system](/state/initialize.html#mutating-functions.html).

::: tip Quick remember
It was the set of functions that should modify the actual state of the app. In the previous section they were just doing nothing.

We're going to give them a real aim :)
:::

---

In `./framework/index.js`, add the methods props to the template argument:

```javascript
export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => props => template({ ...props, methods });
```

And guess what? We can now call our `methods` directly in our `./src/user.js` component!

```javascript
import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};

const initialState = { firstName: "Marvin", lastName: "Frachet" };

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Thomas")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods, initialState });
```

---

::: tip Important note on methods
Take a look at the way we're calling `methods.changeName('Thomas')` in the component.

Oh wait! We previously defined `changeName = (state, firstName) => (/*...*/)`, is that a mistake?

Nop, it's actually the way **I** would like the framework to work. Every time I call a method on the `methods` object, I will
implicitly pass the `state` thanks to the **black box**.
:::

---

Let's modify `./framework/index.js` to have a better understanding of the previous note:

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

---

::: tip Tricky part... sorry
This part is a bit tricky. I'm working in a way to simplify it. It creates headaches just to read it again and again...
:::

---

And let's now change the user component:

```javascript
import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};

const initialState = { firstName: "Marvin", lastName: "Frachet" };

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Thomas")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods, initialState });
```
