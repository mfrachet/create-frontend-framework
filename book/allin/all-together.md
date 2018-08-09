# Bring it all together

This is the last part of the tutorial. This provides the VDOM comparison and DOM patching when a `mutation` function is called.

Then the component state is handled and the component rerendered. Thanks to the VDOM, the dom is modified **only if necessary**.

```javascript
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};

let state = {};

export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => {
  state = initialState;
  let previous;

  const mappedMethods = props =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args);
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props)
          });
          patch(previous.template, nextNode.template);
          previous = nextNode; // this prints "Thomas" as firstName :D
          return state;
        }
      }),
      {}
    );

  return props => {
    previous = template({ ...props, ...state, methods: mappedMethods(props) });
    return previous;
  };
};
```
