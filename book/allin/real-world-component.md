# Real world components

## Creating component in known frameworks

We now need to bind our `state` to the `template literals`.

I don't know if you've minded it but every existing framework has its own way to create components:

- In Angular, we create a class decorated with `@Component`
- In React, we extend the `React.Component` class
- In Vuejs, we create `new Vue()` instances

It's time to create our owns.

## Creating our own definition of component

The aim of this part is to beeing able to create something that would look like:

```javascript
const User = createComponent({ template, methods, initialState });
```

Let's do this! Open `./framework/index.js` and

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

// Add the line concerning methods and initialState
export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => props => template(props);
```

---

::: tip
`createComponent` is a curried function. It's a function `({ template, methods = {}, initialState = {} }) =>` that returns a function `props =>`.

It's a common practice in functional programming to create partial functions that share the same behaviors.

For example, our `createCompoent` doesn't return a component. It returns a component `definition`. `props =>` is actually the component.
:::

---

Actually, this function doesn't do anything special except displaying the template of the component.

Open now `./src/user.js` and make our `User` a real component:

```javascript
import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

// initial state of the User component
const initialState = { firstName: "Marvin", lastName: "Frachet" };

// state mutating actions
const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};

// component template
const template = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;

// create a real world component
export const User = createComponent({ template, methods, initialState });
```

You can now start the application and verify that it **has not changed** anything on the screen.

The step here is to create a blackbox that will allow to enhance the component **transparently**.
