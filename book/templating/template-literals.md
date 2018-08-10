# Template literals as template engine

## Why template literals?

In [What's a template?](/templating/intro.html) I've briefly shown some of the existing framework templating systems. Since building the
different underlying template engines (aka the tools that know how to display the `firstName` in the template) are a bit complex,
I will show you an alternative using a less tricky approach that comes from the standards: [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[_Note that I've made a little experiment using JSX, if you're interested in._](https://github.com/mfrachet/create-frontend-framework/tree/jsx)

## Our first HTML elements

Let's put our hands on!

The first step is to create a folder and a file at `./framework/element.js`:

```javascript
const div = (strings, ...args) => console.log(strings, args);

const firstName = "Marvin";
const lastName = "Frachet";

div`Hello ${firstName} ${lastName} !`;
```

---

::: tip TIP: Tagged templates
On the follow line:

```javascript
div`Hello ${firstName} ${lastName} !`;
```

`div` is what we call a `tag`. It allows to make some specific computations on the following template literals.

**It's available by default in ES6 without any additional plugins!**
:::

---

Run the following command to check the result of such a bunch of code:

```shell
$ node ./framework/element.js
[ 'Hello ', ' ', ' !' ] [ 'Marvin', 'Frachet' ]
```

---

::: tip TIP: Tagged templates parameters
While using `tagged template literals`, the first argument is an array of strings corresponding to the static string of the evaluated element. In the previous example, the static strings are `Hello`, `space`, and `!`.

The second argument concerns the interpolated values. `...args` is called spreading the parameters. It will convert every
arguments (without knowing how much of them) into an array that we will be able to manage.
:::

---

Okay, let's now create a real _understandable_ string from this content. For this, I will use `Array.reduce` function.

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

If you're now familiar with `Array.reduce`, it's the same as:

```javascript
const div = (strings, ...args) => {
  let acc = "";

  for(const currentString of strings) {
    const interpolatedString = (args[index] || ""):
    acc += currentString + interpolatedString;
  }

  return acc;

};
```

It's great, we have now a `tagged template literals` that is called `div`. As you may have imagined, we'll use it later to display the content in the DOM.

## Abstracting for others HTML elements

As developers, we're lazy people and we don't like code duplication. Let's abstract a bit the element creation so that we can use other HTML elements easily:

```javascript
const createElement = tagName => (strings, ...args) => ({
  type: tagName, // this will be useful for the next chapter
  template: strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  )
});

const div = createElement("div");
const p = createElement("p");

const firstName = "Marvin";
const lastName = "Frachet";

//const template = div`Hello ${firstName} ${lastName} !`;
const { template } = p`Hello ${firstName} ${lastName} !`;
console.log(template);
```
