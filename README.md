Clone the project, checkout the `jsx` branch and run

```shell
$ yarn && yarn serve
```

This will spawn an app with the actual framework.

If you want to see the exact same thing with react, modify the following:

- `import { Component } from '../framework` => `import React, { Component } from 'react';` everywhere it exists (only in `src` folder)
- `import { Component, render } from "./framework";` => `import { Component } from '../framework';` + `import ReactDOM from "react-dom";` in `./index.js`
- remove the pragma part in `.babelrc` `[ "transform-react-jsx", { "pragma": "h" } ]`
