# What's a template?

`templates` are a way to display information on the user's browser. It aims to describe _what_ we want to show.

For example, the following templates of the different existing frameworks aim to say `Hello` to somebody. It's easy to read and informative.

There are actually no "way to go" while dealing with templates. Every frameworks implements its own way to do it. But what's interesting here is that
they all use a _superset_ of HTML ([declarative programming](https://stackoverflow.com/questions/129628/what-is-declarative-programming)).

## Template in Vuejs

```html
<template>
	<span>Hello {{firstname}} {{lastName}}</span>
<template>
```

## Template in Angular

It's the same syntax as Vuejs one

```html
<template>
	<span>Hello {{firstname}} {{lastName}}</span>
<template>
```

## Template in React

Templating in React is made using an extension of Javascript called [JSX](https://reactjs.org/docs/introducing-jsx.html). It provides a declarative API that is widely inspired by HTML syntax
to display information.

```jsx
const Component = ({ firstName, lastName }) => (
  <span>
    Hello {firstName} {lastName}
  </span>
);
```
