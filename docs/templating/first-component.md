# Creating our first component

It's great, but we need to use component instead of simple `div` or `p`. We want the framework to allow for components creation. And it as simply as creating a function that wraps elements.

Create a file at `./src/user.js` and add the following code:

```javascript
import { div } from "../framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

export const User = ({ firstName, lastName }) =>
  div`Hello ${firstName} ${lastName}`;
```

And so modify `./index.js`:

```javascript
import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", User({ firstName, lastName }));
```
