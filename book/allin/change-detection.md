# Change detection

It's great! We now have the `template` and the `state` of our application encapsulated in a real world component thanks to `createComponent`!

The next step is to find a way to `trigger` `state` modifications and to display them in the `template`.

This is what we commonly call `change detection`: it's a way to tell the framework **Hey! Re-display information, they have changed!**

## Change detection in Vuejs

Change detection in Vuejs is managed using `observables`. Every property created inside the `data` function is
bound to an `observable`. Each time this value is modified, it's observed and can be handled by the virtual dom accordingly.

```javascript
const component = new View({
  data() {
    return { firstName: "Marvin" };
  },
  methods: {
    changeName() {
      // change detection is triggered here thanks to the provided data function
      this.firstName = "Thomas";
    }
  }
});
```

[More details on how it works in their (really awesome) documentation](https://vuejs.org/v2/guide/reactivity.html)

## Change detection in Angular

Angular has adopted another approach. They started from the assumption that any modification of the state is applied
thanks to `asynchronous` events.

For example, when we type information in an input, the event is handled asynchronously. It's the same for any user interactions (click, input, focus, blur etc...).

From there, they decided to create a library that listens for asynchronous events dispatched by the application. The module is called [`zone.js`](https://github.com/angular/zone.js/) and **rewrites (monkey patching) every of the asynchronous browser methods** to get notified when such events are triggered.

`zonejs` acts from top to bottom: when it catches an async event, it tells the components (from top to bottom) to check there internal state if it has changed since the last change detection cycle.

```html
<!-- Asynchronous click event that triggers a change detection cycle thanks to zone.js -->
 <button (click)="changeName()">Click me!</button>
```

```javascript
changeName() {
	this.firstName = "Thomas";
}
```

## Change detection in React

Change detection cycles are managed explicitly on React. We have to tell the framework that we want to change some data before it actually changes.

The idea is simple: each time `setState` is called, `React` created a new VDOM from a component with the new state. Then the current and the new VDOM are compared and **differences (if there are?)** are concretely applied to the DOM.

```jsx
this.state = { firstName: "Marvin" };

// change detection is triggered manually
this.setState({ firstName: "Thomas" });
```

We're going to use te React approach in our application for the sake of simplicity :)
