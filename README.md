
# AgnosticRun

AgnosticRun is a lightweight utility for ensuring a DOM element exists before executing a function in vanilla JavaScript. It's useful when dealing with dynamic DOM manipulation or when you want to ensure that certain elements are present before applying any JavaScript logic to them.

## Installation

To install AgnosticRun using npm, run the following command:

```bash
npm install agnosticrun
```

## Usage

To use AgnosticRun, import the `agnosticRun` function and wrap your own function that interacts with the DOM.

### Example:

```javascript
import { agnosticRun } from 'agnosticrun';

// Define your function that will interact with a DOM element
function updateElement(element, text) {
  element.textContent = text;
}

// Wrap your function using agnosticRun to ensure the element exists
const safeUpdate = agnosticRun(updateElement);

// Call the wrapped function with the element's ID and the desired content
safeUpdate('element-id', 'Hello, World!');
```

In this example, AgnosticRun ensures that the element with ID `element-id` exists before attempting to update its text content. If the element does not exist, the function will not execute.

## Disable Warns and/or Logs

AgnosticRun allows you to control the appearance of `console.log` and `console.warn` messages through optional flags. You can enable or disable these messages as needed using the following options:

- `debugLog`: Controls the appearance of informational messages (`console.log`). It can be set to `true` or `false`.
- `debugWarn`: Controls the appearance of warning messages (`console.warn`). It can be set to `true` or `false`.

By default, both flags are disabled.

### Example usage:

Show only wanrs on console
```javascript
window.agnosticRun = agnosticRun({ debugLog: false, debugWarn: true });
```

Show only debug messages on console
```javascript
window.agnosticRun = agnosticRun({ debugLog: true, debugWarn: false });
```

Doesn't show any message
```javascript
window.agnosticRun = agnosticRun;
```

## License

AgnosticRun is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues, feel free to report them [here](https://github.com/BansheeDevelopment/AgnosticRun/issues).
