# What's a template?

`templates` are a way to display information on the user's browser. It aims to describe _what_ we want to show.

For example, the following templates of the different existing frameworks aim to say `Hello` to somebody. It's easy to read and informative.

There is no "way to go" while dealing with templates and template engines. Every framework implements its own system. But the interesting thing is that
they all use a _superset_ of HTML ([declarative programming](https://stackoverflow.com/questions/129628/what-is-declarative-programming)).

## Template in Vuejs

```html
<template>
	<span>Hello {{firstname}} {{lastName}}</span>
<template>
```

## Template in Angular

It's the same syntax as Vuejs

```html
<template>
	<span>Hello {{firstname}} {{lastName}}</span>
<template>
```

## Template in React

Templating in React is made using an extension of Javascript called [JSX](https://reactjs.org/docs/introducing-jsx.html)
to display information.

```jsx
const Component = ({ firstName, lastName }) => (
  <span>
    Hello {firstName} {lastName}
  </span>
);
```
