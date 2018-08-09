# How it works in known frameworks?

`State` is the essence of frameworks. It's what **changes** in applications.

Each `state` modification will make the concerned component to `re-render` its template with the according `state` new values.

## State in Vuejs

```javascript
const component = new View({
  data() {
    // initial state
    return { firstName: "Marvin" };
  },
  methods: {
    changeName() {
      // modifying the state
      this.firstName = "Thomas";
    }
  }
});
```

## State in Angular

```javascript
// initial state
this.firstName = "Marvin";

// modifying the state
handleClick() {
	this.firstName = "Thomas";
}
```

## State in React

```jsx
// initial state
this.state = { firstName: "Marvin" };

// modifying the state
this.setState({ firstName: "Thomas" });
```
