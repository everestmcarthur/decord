// Module ID: 1519
// Function ID: 1520
// Name: ThemeProvider
// Dependencies: [19, 21, 1520]
// Exports: ThemeProvider

// Module 1519 (ThemeProvider)
import _mod1520 from "module_1520" /* 1520 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1520.ThemeContext.Provider, { value, children });
};
