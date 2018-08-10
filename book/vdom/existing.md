# Existing VDOM implementations

`VDOM` is more a concept or a technique than a spec. It exists approaches and multiple opinionated implementations of such a thing:

- [Vuejs](https://vuejs.org/) uses a fork of [snabbdom](https://github.com/snabbdom/snabbdom)
- [Cyclejs](https://cycle.js.org/) uses [snabbdom](https://github.com/snabbdom/snabbdom)
- [React](https://reactjs.org/): mmmh. I'm not sure but I think that they use their own (internal) but has inspired [Matt-Esch/virtual-dom](https://github.com/Matt-Esch/virtual-dom)

For the sake of simplicity, we'll use [snabbdom](https://github.com/snabbdom/snabbdom) in this project, let's hack!

::: tip Note for Angular users
Angular doesn't use a Virtual DOM per see, this is why it's not listed here ;)
:::
