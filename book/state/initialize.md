# Our own state management system

## What is our approach?

I suggest we take the approach described previously in [introduction to state, representation with code](/state/intro.html#representation-with-code):

```javascript
const t1State = { firstName: "Marvin", lastName: "Frachet" };

const t2State = transform(t1State, { lastName: "Thomas" });
// t2State is now { firstName: "Marvin", lastName: "Thomas" }
```

We're going to create function that will accept two arguments: the current state of the component and a parameter. This parameter will help
us modifying the state from context.

## Initial state value

Every application may have an initial state value. It helps for consistency and to avoid multiple safety checks on `undefined` types.
Let's create a simple object that will represent our initial component state of `./src/user.js`

```javascript
const initialState = { firstName: "Marvin", lastName: "Frachet" };
```

## Mutating functions

During the application life cycle, we want the initial state to mutate. Here we're going to define the simplest function to make the previous
state mutate according to some parameters:

```javascript
const changeName = (state, firstName) => ({ ...state, firstName });
```

It takes the current state as first parameters. The other parameters are the different `variable` parameters that will allow for the state modification.

For example:

```javascript
const newState = changeName(initialState, "Thomas");

console.log(newState);
// prints { firstName: "Thomas", lastName: "Frachet" }
```

Let's create an object called `methods` that represents a set of mutating actions:

```javascript
const initialState = { firstName: "Marvin", lastName: "Frachet" };

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};
```
