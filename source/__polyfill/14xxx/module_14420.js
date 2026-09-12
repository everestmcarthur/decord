// Module ID: 14420
// Function ID: 14421
// Dependencies: [14388, 14389, 14421]

// Module 14420
import _mod14389 from "module_14389" /* 14389 */;
import element from "element" /* 14421 */;
import getOwnPropertyDescriptor from "module_14388" /* 14388 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14389(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
