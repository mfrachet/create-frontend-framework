# Modify the state of our app

We're now able to add some behavior to all of our components, at one place ! It's time to add some methods inside the component.

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

We can now make some special behavior using these methods ! Why not to be able to modify the props ? In the `./framework/index.js`, add:

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
