// Module ID: 14387
// Function ID: 14388
// Dependencies: [14355, 14356, 14388]

// Module 14387
import _mod14356 from "module_14356" /* 14356 */;
import element from "element" /* 14388 */;
import getOwnPropertyDescriptor from "module_14355" /* 14355 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14356(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
