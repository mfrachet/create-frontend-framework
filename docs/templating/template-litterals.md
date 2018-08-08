# Template litterals as template engine

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
