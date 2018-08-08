# Existing VDOM implementations

`VDOM` is more a concept or a technique than a spec. This way, it exists multiple opinionated implementations of such a thing.

- [Vuejs](https://vuejs.org/) uses a fork of [snabbdom](https://github.com/snabbdom/snabbdom)
- [Cyclejs](https://cycle.js.org/) uses [snabbdom](https://github.com/snabbdom/snabbdom)
- [React](https://reactjs.org/): mmmh. I'm not sure but I think that they use their own (internal) but has inspired [Matt-Esch/virtual-dom](https://github.com/Matt-Esch/virtual-dom)

Surprisingly [Angular](http://angular.io/) doesn't use a Virtual DOM. They use another mechanism to manage change detection called [`zone.js`](https://github.com/angular/zone.js/)

For the sake of simplicity, we'll use [snabbdom](https://github.com/snabbdom/snabbdom) in this project, let's hack!
