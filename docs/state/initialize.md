# Adding some state in our app

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
