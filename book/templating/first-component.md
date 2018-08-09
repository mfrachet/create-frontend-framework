# Creating our first component

In [Display the template in the DOM](/templating/content-in-dom.html), we have displayed `Hello Marvin Frachet` in the browser using template litterals.

It's great but as any other frameworks, we need to have `components` for code reusability. We don't want to rely on simple `div` or `p` HTML elements.

In our context we will create `component` that will be functions.

---

::: tip
In React, it's really common to use `function` as component and even recommended when possible, so we're not that far right ? ;)
:::

---

Let's create a file at `./src/user.js` and add the following code:

```javascript
import { div } from "../framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

export const User = ({ firstName, lastName }) =>
  div`Hello ${firstName} ${lastName}`;
```

And so modify `./index.js` to spawn a `User` instead of a `p`:

```javascript
import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", User({ firstName, lastName }));
```

---

::: tip
For the purpose of this exercice, I won't show you how to create every HTML component. But since we have already built
the "element creator", you can add any one of them
:::

---

Awesomeness is coming... :D
