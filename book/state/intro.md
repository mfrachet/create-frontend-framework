# What is the state of an app?

## Understanding with a concrete example

The state of an application is like a snapshot of it at a specific time.

For example, imagine [this TodoMVC example](http://todomvc.com/examples/react/#/).

When you launch the application, it's in an `initial state`. Applied to the context of TodoMVC, the `initial state` is:

- empty list of todos
- input is empty

When you start typing stuff inside the text input, the application state changes:

- the todo list stays empty
- **the input is now filled with some typed value**

When you press enter, a todo item appears in the list. The new state is now:

- **todo list has 1 item**
- **the input has been cleared, so it's empty again**

## Representation with code

```javascript
const t1State = { firstName: "Marvin", lastName: "Frachet" };

const t2State = transform(t1State, { lastName: "Thomas" });
// t2State is now { firstName: "Marvin", lastName: "Thomas" }
```

Every frontend framework uses its own internal way to `transform` and `manage` state.
