# First step (simple view)

* Create a `./framework` directory
* Create a `./framework/element.js` file
* Add this to the file and check the output of custom template litterals:

```javascript
const div = (strings, ...args) => console.log(strings, args);

const firstName = "Marvin";
const lastName = "Frachet";

div`Hello ${firstName} ${lastName} !`;
```

```shell
$ node ./framework/element.js
```

* Reducing to offer a clean string instead of the array

```javascript
const div = (strings, ...args) =>
  strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  );

const firstName = "Marvin";
const lastName = "Frachet";

const template = div`Hello ${firstName} ${lastName} !`;
console.log(template);
```

* Let's refacto and create something more abstracted

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
console.log(template);
```

The type is important because we'll need it to add the element to the DOM !

* Let's create now a `./framework/index.js`

```javascript
export const init = (selector, component) => {
  const app = document.querySelector(selector);
  const newElement = document.createElement(component.type);
  const newTextContent = document.createTextNode(component.template);

  newElement.append(newTextContent);
  app.append(newElement);
};
```

* remove unecessary stuff to make the `./framework/element.js` looks like :

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

* put the following in the `./index.js` : it spawns the root component inside a #app selector

```javascript
import { init } from "./framework";
import { div } from "./framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", div`Hello ${firstName} ${lastName}`);
// init("#app", p`Hello ${firstName} ${lastName}`); works as simply as moving div to p
```

Let's now create our first component in `./src/user.js`:

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

Available at

```shell
$ git checkout step-1
```

# Second step (adding VDOM)
