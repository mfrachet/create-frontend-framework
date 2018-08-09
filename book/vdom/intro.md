# What is a Virtual DOM?

You've probably heard of Virtual DOM.

It's a concept that aims to represent and manipulate DOM nodes using plain Javascript objects.

Modification would happen only on the virtual tree and be applied only at the end of the process to the real DOM.

It solves the problem that DOM manipulations are really slow. This way computing simple JS Objects in memory is really much faster that manipulated DOM objects **for every transformations**.

![Virtual DOM in image](https://blog.codecentric.de/files/2017/11/Bildschirmfoto-2017-10-25-um-14.32.03.png)

::: tip Taken from React documentation

### What is the Virtual DOM?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

---

[Link to this documentation](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)
:::
