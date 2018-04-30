# First step

* Create a `./framework` directory
* Create a `./framework/element.js` file
* Add this to the file and check the output of custom template litterals:

```javascript
const div = (strings, ...args) => console.log(strings, args);

const firstName = "Marvin";
const lastName = "Frachet";

div`Hello ${firstName} ${lastName} !`;
```

```shell
$ node ./framework/element.js
```

* Reducing to offer a clean string instead of the array

```javascript
const div = (strings, ...args) =>
  strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  );

const firstName = "Marvin";
const lastName = "Frachet";

const template = div`Hello ${firstName} ${lastName} !`;
console.log(template);
```
