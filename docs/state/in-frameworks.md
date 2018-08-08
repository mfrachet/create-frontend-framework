# How it works in known frameworks?

`State` is the essence of frameworks. It's what **changes** in applications.

To make `state` _change_, frameworks rely on something
called `change detection`.

It's simply a way to tell the framework **Hey! Re-display information, they have changed!**

## State & change detection in Vuejs

State and change detection in Vuejs is managed using `observables`. Every property created inside the `data` function is
bound to an `observable`. Each time this value is modified, it's observed and can be handled by the virtual dom accordingly.

[More details on how it works in their (really awesome) documentation](https://vuejs.org/v2/guide/reactivity.html)

```javascript
const component = new View({
  data() {
    // initial state
    return { firstName: "Marvin" };
  },
  methods: {
    changeName() {
      // trigger a change detection when assigning to a property defined in data()`
      this.firstName = "Thomas";
    }
  }
});
```

## State & change detection in Angular

Angular has adopted another approach. They started from this assumptions: any modification of the state is applied
thanks to `asynchronous` handling.

For exemple, when we type information in an input, the event handling is asynchronous. It's the same when users click a button.

This way the team have created a project called [`zone.js`](https://github.com/angular/zone.js/) that rewrites every asynchronous handler of the browser
(monkeypatching) to know **when** it has to trigger rendering cycle.

The behavior acts from top to bottom on the tree component: it means that **each component is visited and knows if it has to rerender or not**.

```javascript
// initial state
this.firstName = "Marvin";

// change detection triggered by https://github.com/angular/zone.js/ on asynchronous behaviors
handleClick() {
	this.firstName = "Thomas";
}
```

## State & change detection in React

State and change detection are managed explicitly on React. We have to tell the framework that we want to change some data before it actually changes.

The idea is simple, each time `setState` is called, `React` created a new VDOM with the new state. Then the current and the new VDOM are compared and
**differences (if there are?)** are concretly applied to the DOM.

```jsx
// initial state
this.state = { firstName: "Marvin" };

// change detection
this.setState({ firstName: "Thomas" });
```
