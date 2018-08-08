# What is the state of an app?

The state of an application is kind of like a snapshot of it at a specific time.
Let's represent it from a programming point of view:

```javascript
const t1State = { firstName: "Marvin", lastName: "Frachet" };

const t2State = transform(t1State, { lastName: "Thomas" });
// t2State is now { firstName: "Marvin", lastName: "Thomas" }
```

Every frontend framework uses its own internal way to `transform` state. For the sake of learning and clarity, I'll try to stick as much as possible to the previous definition.

For now, we need to create a shared behaviour between every of our components: we need to make any created component able to manage its own internal state.
