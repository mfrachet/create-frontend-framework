# Change detection

We now have our `template engine` and our `state`. The problem is that they are completely unbound.

We need a way to _react_ on user inputs and to make the state change appears on the browser.

What we want is commonly called `change detection`.

It's simply a way to tell the framework **Hey! Re-display information, they have changed!**

## Change detection in Vuejs

Change detection in Vuejs is managed using `observables`. Every property created inside the `data` function is
bound to an `observable`. Each time this value is modified, it's observed and can be handled by the virtual dom accordingly.

[More details on how it works in their (really awesome) documentation](https://vuejs.org/v2/guide/reactivity.html)

## Change detection in Angular

Angular has adopted another approach. They started from this assumptions: any modification of the state is applied
thanks to `asynchronous` handling.

For exemple, when we type information in an input, the event handling is asynchronous. It's the same when users click a button.

This way the team have created a project called [`zone.js`](https://github.com/angular/zone.js/) that rewrites every asynchronous handler of the browser
(monkey-patching) to know **when** it has to trigger rendering cycle.

The behavior acts from top to bottom on the tree component: it means that **each component is visited and knows if it has to rerender or not**.

## Change detection in React

Change detection cycles are managed explicitly on React. We have to tell the framework that we want to change some data before it actually changes.

The idea is simple, each time `setState` is called, `React` created a new VDOM of a component with the new state. Then the current and the new VDOM are compared and
**differences (if there are?)** are concretely applied to the DOM.
